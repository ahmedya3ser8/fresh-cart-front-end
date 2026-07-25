import { inject, Injectable } from '@angular/core';

import { API_ENDPOINTS } from '../../../constants';
import { BaseHttpService } from '../../../core';
import { OnlineOrder, Order } from '../models';
import { Router } from '@angular/router';
import { CartService } from '../../cart';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseHttpService<Order> {
  private readonly router = inject(Router);
  private readonly cartService = inject(CartService);

  override getResourceUrl(): string {
    return API_ENDPOINTS.ORDER.BASE;
  }

  createCashOrder(cartId: string, body: any): void {
    this.post<Order>(`/${cartId}`, { shippingAddress: body }).subscribe({
      next: (res) => {
        console.log(res);
        this.cartService.loadCart();
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  createOnlineOrder(cartId: string, body: any): void {
    this.post<OnlineOrder>(`/checkout-session/${cartId}?url=http://localhost:4200`, { shippingAddress: body }).subscribe({
      next: (res) => {
        console.log(res);
        this.cartService.loadCart();
        open(res.session.url, '_self');
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
