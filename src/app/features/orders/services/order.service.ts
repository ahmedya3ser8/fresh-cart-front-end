import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { API_ENDPOINTS } from '../../../constants';
import { BaseHttpService } from '../../../core';
import { CartService } from '../../cart';
import { OnlineOrder, Order, OrderData } from '../models';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseHttpService<Order> {

  private readonly cartService = inject(CartService);

  override getResourceUrl(): string {
    return API_ENDPOINTS.ORDER.BASE;
  }

  createCashOrder(cartId: string, body: any): Observable<Order> {
    return this.post<Order>(`/${cartId}`, { shippingAddress: body }).pipe(
      tap(() => this.cartService.loadCart())
    );
  }

  createOnlineOrder(cartId: string, body: any): Observable<OnlineOrder> {
    return this.post<OnlineOrder>(`/checkout-session/${cartId}?url=http://localhost:4200`, { shippingAddress: body }).pipe(
      tap(() => this.cartService.loadCart())
    )
  }

  getUserOrders(userId: string): Observable<OrderData[]> {
    return this.get<OrderData[]>(`/user/${userId}`);
  }
}
