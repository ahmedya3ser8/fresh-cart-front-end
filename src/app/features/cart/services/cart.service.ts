import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { API_ENDPOINTS } from '../../../constants';
import { BaseHttpService } from '../../../core';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService extends BaseHttpService {
  cart = new BehaviorSubject<Cart | null>(null);
  isLoading = new BehaviorSubject<boolean>(false);

  getUserCart(): Observable<Cart> {
    return this.get<Cart>(API_ENDPOINTS.CART.GET_USER_CART).pipe(
      tap(res => {
        this.cart.next(res);
        this.isLoading.next(false);
      })
    );
  }

  clearCart(): Observable<Cart> {
    return this.delete<Cart>(API_ENDPOINTS.CART.CLEAR_CART()).pipe(
      tap(res => this.cart.next(res))
    )
  }

  addProductToCart(productId: string): Observable<Cart> {
    return this.post<Cart>(API_ENDPOINTS.CART.ADD_PRODUCT_TO_CART, { productId }).pipe(
      tap(res => this.cart.next(res))
    )
  }

  updateQuantity(productId: string, count: number): Observable<Cart> {
    return this.put<Cart>(API_ENDPOINTS.CART.UPDATE_CART_PRODUCT_QUANTITY(productId), { count }).pipe(
      tap(res => this.cart.next(res))
    )
  }

  deleteProduct(productId: string): Observable<Cart> {
    return this.delete<Cart>(API_ENDPOINTS.CART.DELETE_PRODUCT_FROM_CART(productId)).pipe(
      tap(res => this.cart.next(res))
    )
  }
}
