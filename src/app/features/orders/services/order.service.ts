import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { API_ENDPOINTS } from '../../../constants';
import { BaseHttpService } from '../../../core';
import { CartService } from '../../cart';
import { OnlineOrder, Order, OrderData } from '../models';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseHttpService {
  private readonly cartService = inject(CartService);

  createCashOrder(cartId: string, body: any): Observable<Order> {
    return this.post<Order>(API_ENDPOINTS.ORDER.CREATE_CASH_ORDER(cartId), { shippingAddress: body }).pipe(
      tap(() => this.cartService.getUserCart())
    );
  }

  createOnlineOrder(cartId: string, body: any): Observable<OnlineOrder> {
    return this.post<OnlineOrder>(API_ENDPOINTS.ORDER.CREATE_ONLINE_ORDER(cartId), { shippingAddress: body }).pipe(
      tap(() => this.cartService.getUserCart())
    )
  }

  getUserOrders(userId: string): Observable<OrderData[]> {
    return this.get<OrderData[]>(API_ENDPOINTS.ORDER.GET_USER_ORDERS(userId));
  }
}
