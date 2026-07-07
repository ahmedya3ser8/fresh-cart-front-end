import { Component, Input } from '@angular/core';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroArrowUturnLeft, heroHeart, heroMinus, heroPlus, heroShare, heroShieldCheck, heroStar, heroTruck } from '@ng-icons/heroicons/outline';
import { heroBoltSolid, heroShoppingCartSolid, heroStarSolid } from '@ng-icons/heroicons/solid';

import { Product } from '../../models';

@Component({
  selector: 'app-product-info',
  imports: [NgIconComponent],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css',
  providers: [
    provideIcons({
      heroStarSolid,
      heroStar,
      heroMinus,
      heroPlus,
      heroShoppingCartSolid,
      heroBoltSolid,
      heroHeart,
      heroShare,
      heroTruck,
      heroArrowUturnLeft,
      heroShieldCheck
    })
  ]
})
export class ProductInfoComponent {
  @Input({ required: true }) product!: Product;

  features = [
    { id: 'a', icon: 'heroTruck', title: 'Free Delivery', description: 'Orders over $50' },
    { id: 'b', icon: 'heroArrowUturnLeft', title: '30 Days Return', description: 'Money back' },
    { id: 'c', icon: 'heroShieldCheck', title: 'Secure Payment', description: '100% Protected' },
  ];
}
