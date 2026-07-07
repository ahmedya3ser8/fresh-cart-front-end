import { Component } from '@angular/core';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroArrowUturnLeft, heroCheck, heroShieldCheck } from '@ng-icons/heroicons/outline';
import { heroTruckSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-product-shipping-tab',
  imports: [NgIconComponent],
  templateUrl: './product-shipping-tab.component.html',
  styleUrl: './product-shipping-tab.component.css',
  providers: [
    provideIcons({
      heroTruckSolid,
      heroCheck,
      heroArrowUturnLeft,
      heroShieldCheck
    })
  ]
})
export class ProductShippingTabComponent {
  shippingList = [
    {
      icon: 'heroTruckSolid',
      title: 'Shipping Information',
      items: [
        'Free shipping on orders over $50',
        'Standard delivery: 3–5 business days',
        'Express delivery available (1–2 business days)',
        'Track your order in real-time'
      ]
    },
    {
      icon: 'heroArrowUturnLeft',
      title: 'Returns & Refunds',
      items: [
        '30-day hassle-free returns',
        'Full refund or exchange available',
        'Free return shipping on defective items',
        'Easy online return process'
      ]
    },
  ];
}
