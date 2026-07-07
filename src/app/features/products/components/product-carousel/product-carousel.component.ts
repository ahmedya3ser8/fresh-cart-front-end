import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';

import { ProductCardComponent } from "../../../../shared";
import { Product } from '../../models';

import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

import { isPlatformBrowser } from '@angular/common';
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroChevronLeft, heroChevronRight } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-product-carousel',
  imports: [ProductCardComponent, NgIconComponent],
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideIcons({
      heroChevronLeft,
      heroChevronRight
    })
  ]
})
export class ProductCarouselComponent implements AfterViewInit {
  @Input({ required: true }) products!: Product[];

  @ViewChild('swiperRef') swiperRef!: ElementRef<SwiperContainer>;
  @ViewChild('nextBtn') nextBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('prevBtn') prevBtn!: ElementRef<HTMLButtonElement>;

  private readonly platformId = inject(PLATFORM_ID);

  swiperConfig: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 16,
    speed: 700,
    breakpoints: {
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 }
    },
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initSwiper();
    }
  }

  initSwiper(): void {
    const swiperEl = this.swiperRef.nativeElement;
    Object.assign(swiperEl, {
      ...this.swiperConfig,
      navigation: {
        nextEl: this.nextBtn.nativeElement,
        prevEl: this.prevBtn.nativeElement,
      }
    });
    swiperEl.initialize();
  }
}
