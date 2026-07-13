import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { API_ENDPOINTS } from '../../../constants';
import { BaseHttpService } from '../../../core';
import { Cart, CreateCartDto, UpdateCartDto } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService extends BaseHttpService<Cart, CreateCartDto, UpdateCartDto> {
  override getResourceUrl(): string {
    return API_ENDPOINTS.CART.BASE;
  }

  private readonly cartSubject = new BehaviorSubject<Cart | null>(null);

  readonly cart$ = this.cartSubject.asObservable();

  get currentCart(): Cart | null {
    return this.cartSubject.value;
  }

  setCart(cart: Cart | null): void {
    this.cartSubject.next(cart);
  }
}
