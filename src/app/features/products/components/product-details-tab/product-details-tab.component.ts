import { Component, Input } from '@angular/core';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import {
  heroCheckBadgeSolid,
  heroCubeSolid,
  heroQueueListSolid,
  heroShieldCheckSolid,
  heroSparklesSolid,
  heroSquares2x2Solid,
  heroTagSolid
} from '@ng-icons/heroicons/solid';
import { Product } from '../../models';

@Component({
  selector: 'app-product-details-tab',
  imports: [NgIconComponent],
  templateUrl: './product-details-tab.component.html',
  styleUrl: './product-details-tab.component.css',
  providers: [
    provideIcons({
      heroCubeSolid,
      heroSquares2x2Solid,
      heroQueueListSolid,
      heroTagSolid,
      heroSparklesSolid,
      heroCheckBadgeSolid,
      heroShieldCheckSolid,
    })
  ]
})
export class ProductDetailsTabComponent {
  @Input({ required: true }) product!: Product;

  keyFeatures = [
    { icon: 'heroCheckBadgeSolid', text: 'Premium Quality Product' },
    { icon: 'heroShieldCheckSolid', text: '100% Authentic Guarantee' },
    { icon: 'heroCubeSolid', text: 'Fast & Secure Packaging' },
    { icon: 'heroCheckBadgeSolid', text: 'Quality Tested' },
  ];

  productInfo = [
    { label: 'Category', value: () => this.product.category.name, icon: 'heroSquares2x2Solid' },
    { label: 'Subcategory', value: () => this.product.subcategory[0].name, icon: 'heroQueueListSolid' },
    { label: 'Brand', value: () => this.product.brand.name, icon: 'heroTagSolid' },
    { label: 'Items Sold', value: () => this.product.sold, icon: 'heroCubeSolid' },
  ];
}
