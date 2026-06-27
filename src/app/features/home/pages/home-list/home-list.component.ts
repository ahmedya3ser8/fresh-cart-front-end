import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from "@angular/router";

import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home-list',
  imports: [RouterLink],
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeListComponent implements AfterViewInit {
  heroList = [
    {
      id: 1,
      title: 'Fresh Products Delivered to your Door',
      description: 'Get 20% off your first order',
      links: [
        { link: '/products', text: 'Shop Now' },
        { link: '', text: 'View Deals' }
      ]
    },
    {
      id: 1,
      title: 'Premium Quality Guaranteed',
      description: 'Fresh from farm to your table',
      links: [
        { link: '/products', text: 'Shop Now' },
        { link: '', text: 'Learn More' }
      ]
    },
    {
      id: 1,
      title: 'Fast & Free Delivery',
      description: 'Same day delivery available',
      links: [
        { link: '', text: 'Order Now' },
        { link: '', text: 'Delivery Info' }
      ]
    },
  ];

  @ViewChild('swiperRef') swiperRef!: ElementRef<SwiperContainer>;

  private readonly platformId = inject(PLATFORM_ID);

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    speed: 700,
    autoplay: { delay: 4000, pauseOnMouseEnter: true },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initSwiper();
    }
  }

  initSwiper(): void {
    const swiperEl = this.swiperRef.nativeElement;
    Object.assign(swiperEl, this.swiperConfig);
    swiperEl.initialize();
  }
}
