import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroArchiveBoxSolid, heroShoppingBagSolid } from '@ng-icons/heroicons/solid';

import { BreadcrumbComponent } from "../../../../shared";
import { AuthService } from '../../../auth';
import { OrderDetailsComponent, OrderItemComponent } from "../../components";
import { OrderData } from '../../models';
import { OrderService } from '../../services';

@Component({
  selector: 'app-all-orders',
  imports: [BreadcrumbComponent, NgIconComponent, RouterLink, OrderItemComponent, OrderDetailsComponent],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.css',
  providers: [
    provideIcons({
      heroArchiveBoxSolid,
      heroShoppingBagSolid,
    })
  ]
})
export class AllOrdersComponent implements OnInit {
  breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'My Orders' }
  ];

  private readonly authService = inject(AuthService);
  private readonly orderService = inject(OrderService);

  userInfo = this.authService.getUserInfoFromToken();
  orders: OrderData[] = [];
  openOrderId: string | null = null;

  ngOnInit(): void {
    this.loadUserOrders();
  }

  loadUserOrders(): void {
    this.orderService.getUserOrders(this.userInfo?.id!).subscribe({
      next: (res) => {
        console.log(res);
        this.orders = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  toggle(orderId: string): void {
    this.openOrderId = this.openOrderId === orderId ? null : orderId;
  }
}
