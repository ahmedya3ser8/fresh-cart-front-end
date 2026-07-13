import { Component, Input } from '@angular/core';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroShoppingCartSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-cart-header',
  imports: [NgIconComponent],
  templateUrl: './cart-header.component.html',
  styleUrl: './cart-header.component.css',
  providers: [
    provideIcons({
      heroShoppingCartSolid
    })
  ]
})
export class CartHeaderComponent {
  @Input({ required: true }) numOfCartItems!: number;
}
