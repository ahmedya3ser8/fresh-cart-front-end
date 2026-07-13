import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroArrowLongLeft } from '@ng-icons/heroicons/outline';
import { heroTrashSolid } from '@ng-icons/heroicons/solid';

import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';
import { CartCardComponent } from "../../components/cart-card/cart-card.component";
import { CartHeaderComponent } from "../../components/cart-header/cart-header.component";
import { CartSummaryComponent } from "../../components/cart-summary/cart-summary.component";

import { Cart } from '../../models/cart';
import { CartService } from '../../services';

@Component({
  selector: 'app-cart-list',
  imports: [BreadcrumbComponent, NgIconComponent, CartCardComponent, CartHeaderComponent, CartSummaryComponent, RouterLink],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css',
  providers: [
    provideIcons({
      heroTrashSolid,
      heroArrowLongLeft
    })
  ]
})
export class CartListComponent {
  private readonly cartService = inject(CartService);

  breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'Shopping Cart' }
  ];

  cart: Cart = {} as Cart;

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart => {
      if (cart) {
        this.cart = cart;
      }
    });
    if (!this.cartService.currentCart) {
      this.loadCart();
    }
  }

  loadCart(): void {
    this.cartService.get().subscribe({
      next: (res) => {
        console.log(res);
        this.cartService.setCart(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  deleteCart(): void {
    this.cartService.delete<Cart>().subscribe({
      next: (res) => {
        console.log(res);
        this.cartService.setCart(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
