import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, Input, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

import { Product } from '../../models';

@Component({
  selector: 'app-product-gallery',
  imports: [],
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductGalleryComponent {
  private readonly platformId = inject(PLATFORM_ID);

  @ViewChild('mainSwiper') mainSwiper!: ElementRef<SwiperContainer>;
  @ViewChild('thumbsSwiper') thumbsSwiper!: ElementRef<SwiperContainer>;

  @Input({ required: true }) product!: Product;

  mainSwiperConfig: SwiperOptions = {
    slidesPerView: 1
  };

  thumbsSwiperConfig: SwiperOptions = {
    slidesPerView: 3.5,
    spaceBetween: 8,
    freeMode: true,
    watchSlidesProgress: true,
  };

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initSwiper();
    }
  }

  initSwiper(): void {
    const thumbs = this.thumbsSwiper.nativeElement;
    const main = this.mainSwiper.nativeElement;

    Object.assign(thumbs, this.thumbsSwiperConfig);
    thumbs.initialize();

    queueMicrotask(() => {
      Object.assign(main, {
        ...this.mainSwiperConfig,
        thumbs: {
          swiper: thumbs.swiper,
        },
      });
      main.initialize();
    });
  }
}
