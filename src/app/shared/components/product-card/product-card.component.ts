import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroEye, heroHeart, heroPlus, heroStar } from '@ng-icons/heroicons/outline';
import { heroStarSolid } from '@ng-icons/heroicons/solid';

import { Product } from '../../../features/products/models/product';

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
  @Input({ required: true }) product!: Product;

  calculateDiscount(price: number, priceAfterDiscount: number): number {
    return Math.round(((price - priceAfterDiscount) / price) * 100);
  }
}
