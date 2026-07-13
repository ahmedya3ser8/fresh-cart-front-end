import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroEye, heroHeart, heroPlus, heroStar } from '@ng-icons/heroicons/outline';
import { heroStarSolid } from '@ng-icons/heroicons/solid';

import { Product } from '../../../features/products/models/product';
import { CartService } from '../../../features/cart';
import { Cart } from '../../../features/cart/models/cart';

@Component({
  selector: 'app-product-card',
  imports: [NgIconComponent, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
  providers: [
    provideIcons({
      heroStarSolid,
      heroStar,
      heroPlus,
      heroHeart,
      heroEye
    })
  ]
})
export class ProductCardComponent {
  private readonly cartService = inject(CartService);

  @Input({ required: true }) product!: Product;

  calculateDiscount(price: number, priceAfterDiscount: number): number {
    return Math.round(((price - priceAfterDiscount) / price) * 100);
  }

  addProductToCart(productId: string): void {
    this.cartService.post<Cart>('', { productId }).subscribe({
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
