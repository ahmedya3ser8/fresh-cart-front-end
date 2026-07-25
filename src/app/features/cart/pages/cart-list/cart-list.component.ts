import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroArrowLongLeft, heroArrowLongRight, heroShoppingCart } from '@ng-icons/heroicons/outline';
import { heroTrashSolid } from '@ng-icons/heroicons/solid';

import { BreadcrumbComponent } from '../../../../shared/components/breadcrumb/breadcrumb.component';
import { CartCardComponent } from "../../components/cart-card/cart-card.component";
import { CartHeaderComponent } from "../../components/cart-header/cart-header.component";
import { CartSummaryComponent } from "../../components/cart-summary/cart-summary.component";

import { CartService } from '../../services';
import { Cart } from '../../models/cart';

@Component({
  selector: 'app-cart-list',
  imports: [BreadcrumbComponent, NgIconComponent, CartCardComponent, CartHeaderComponent, CartSummaryComponent, RouterLink],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css',
  providers: [
    provideIcons({
      heroTrashSolid,
      heroArrowLongLeft,
      heroShoppingCart,
      heroArrowLongRight
    })
  ]
})
export class CartListComponent {
  private readonly cartService = inject(CartService);

  breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'Shopping Cart' }
  ];

  isOpen: boolean = false;

  get cart(): Cart | null {
    return this.cartService.cart.value;
  }

  ngOnInit(): void {
    this.cartService.loadCart();
  }

  deleteCart(): void {
    this.cartService.deleteCart();
    this.isOpen = false;
  }
}
