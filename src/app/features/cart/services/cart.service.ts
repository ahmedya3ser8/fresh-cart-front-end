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

  cart = new BehaviorSubject<Cart | null>(null);
  isLoading = new BehaviorSubject<boolean>(false);

  loadCart(): void {
    this.isLoading.next(true);
    this.get().subscribe({
      next: (res) => {
        console.log(res);
        this.cart.next(res);
        this.isLoading.next(false);
      },
      error: (err) => {
        console.log(err);
        this.isLoading.next(false);
      }
    })
  }

  deleteCart(): void {
    this.delete<Cart>().subscribe({
      next: (res) => {
        console.log(res);
        this.cart.next(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  addProductToCart(productId: string): void {
    this.post<Cart>('', { productId }).subscribe({
      next: (res) => {
        console.log(res);
        this.cart.next(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  updateQuantity(productId: string, count: number): void {
    this.put<Cart>(productId, { count }).subscribe({
      next: (res) => {
        console.log(res);
        this.cart.next(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  deleteProduct(productId: string): void {
    this.delete<Cart>(productId).subscribe({
      next: (res) => {
        console.log(res);
        this.cart.next(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
