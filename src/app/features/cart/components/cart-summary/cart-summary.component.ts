import { Component, Input } from '@angular/core';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroTruck } from '@ng-icons/heroicons/outline';
import { heroLockClosedSolid, heroShoppingBagSolid } from '@ng-icons/heroicons/solid';

import { Cart } from '../../models/cart';

@Component({
  selector: 'app-cart-summary',
  imports: [NgIconComponent],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css',
  providers: [
    provideIcons({
      heroShoppingBagSolid,
      heroTruck,
      heroLockClosedSolid
    })
  ]
})
export class CartSummaryComponent {
  @Input({ required: true }) cart!: Cart;
}
