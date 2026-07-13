import { Component, inject, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroMinus, heroPlus } from '@ng-icons/heroicons/outline';
import { heroTrashSolid } from '@ng-icons/heroicons/solid';

import { Cart, CartProduct } from '../../models/cart';
import { CartService } from '../../services';

@Component({
  selector: 'app-cart-card',
  imports: [RouterLink, NgIconComponent],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.css',
  providers: [
    provideIcons({
      heroMinus,
      heroPlus,
      heroTrashSolid
    })
  ]
})
export class CartCardComponent {
  private readonly cartService = inject(CartService);

  @Input({ required: true }) product!: CartProduct;

  deleteProduct(productId: string): void {
    this.cartService.delete<Cart>(productId).subscribe({
      next: (res) => {
        console.log(res);
        this.cartService.setCart(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  updateQuantity(productId: string, count: number): void {
    this.cartService.put<Cart>(productId, { count }).subscribe({
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
