import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroArrowSmallRight } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-deal-banner',
  imports: [RouterLink, NgIconComponent],
  templateUrl: './deal-banner.component.html',
  styleUrl: './deal-banner.component.css',
  providers: [
    provideIcons({ heroArrowSmallRight })
  ]
})
export class DealBannerComponent {
  dealBanners = [
    {
      id: 1,
      badge: '🔥 Deal of the Day',
      title: 'Fresh Organic Fruits',
      description: 'Get up to 40% off on selected organic fruits',
      discount: '40% OFF',
      code: 'ORGANIC40',
      buttonText: 'Shop Now',
      gradient: 'bg-linear-to-br from-emerald-500 to-emerald-700',
      textColor: 'text-emerald-600'
    },
    {
      id: 2,
      badge: '✨ New Arrivals',
      title: 'Exotic Vegetables',
      description: 'Discover our latest collection of premium vegetables',
      discount: '25% OFF',
      code: 'FRESH25',
      buttonText: 'Explore Now',
      gradient: 'bg-linear-to-br from-orange-500 to-orange-700',
      textColor: 'text-orange-600'
    },
  ];
}
