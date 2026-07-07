import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroCubeSolid, heroStarSolid, heroTruckSolid } from '@ng-icons/heroicons/solid';

import { Tab } from '../../models';

@Component({
  selector: 'app-product-tabs',
  imports: [NgIconComponent],
  templateUrl: './product-tabs.component.html',
  styleUrl: './product-tabs.component.css',
  providers: [
    provideIcons({
      heroTruckSolid,
      heroStarSolid,
      heroCubeSolid
    })
  ]
})
export class ProductTabsComponent {
  @Input({ required: true }) activeTab!: Tab;
  @Input() reviewsCount!: number;

  @Output() selectTab = new EventEmitter<Tab>();

  tabs = [
    { id: 'details' as Tab, label: 'Product Details', icon: 'heroCubeSolid' },
    { id: 'reviews' as Tab, label: 'Reviews', icon: 'heroStarSolid' },
    { id: 'shipping' as Tab, label: 'Shipping & Returns', icon: 'heroTruckSolid' },
  ];
}
