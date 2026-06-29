import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterLink } from "@angular/router";

import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

import { SectionHeadingComponent } from "../../../../shared";
import { CategoryService } from '../../../categories';
import { Category } from '../../../categories/models/category';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroArrowSmallRight } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-category-carousel',
  imports: [RouterLink, NgIconComponent, SectionHeadingComponent],
  templateUrl: './category-carousel.component.html',
  styleUrl: './category-carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideIcons({ heroArrowSmallRight })
  ]
})
export class CategoryCarouselComponent implements AfterViewInit, OnInit {
  categories: Category[] = [];

  @ViewChild('swiperRef') swiperRef!: ElementRef<SwiperContainer>;

  private readonly platformId = inject(PLATFORM_ID);
  private readonly categoryService = inject(CategoryService);

  swiperConfig: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 16,
    loop: true,
    speed: 700,
    autoplay: { delay: 2000, pauseOnMouseEnter: true },
    breakpoints: {
      640: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 6 }
    }
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initSwiper();
    }
  }

  loadCategories(): void {
    this.categoryService.getAll().subscribe({
      next: (res) => {
        if (res.data) {
          this.categories = res.data;
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  initSwiper(): void {
    const swiperEl = this.swiperRef.nativeElement;
    Object.assign(swiperEl, this.swiperConfig);
    swiperEl.initialize();
  }
}
