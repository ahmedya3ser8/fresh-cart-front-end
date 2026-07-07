import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Breadcrumb } from '../../../../core';
import { BreadcrumbComponent, SectionHeadingComponent } from "../../../../shared";
import {
  ProductCarouselComponent,
  ProductDetailsTabComponent,
  ProductGalleryComponent,
  ProductInfoComponent,
  ProductReviewsTabComponent,
  ProductShippingTabComponent,
  ProductTabsComponent
} from '../../components';
import { Product, Review, Tab } from '../../models';
import { ProductService, ReviewService } from '../../services';

@Component({
  selector: 'app-product-details',
  imports: [BreadcrumbComponent, ProductGalleryComponent, ProductInfoComponent, ProductTabsComponent, ProductDetailsTabComponent, ProductShippingTabComponent, ProductReviewsTabComponent, SectionHeadingComponent, ProductCarouselComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);
  private readonly reviewService = inject(ReviewService);

  productId!: string;
  product: Product = {} as Product;
  products: Product[] = [];
  breadcrumbs: Breadcrumb[] = [];
  reviews: Review[] = [];
  activeTab: Tab = 'details';

  ngOnInit(): void {
    this.getProductId();
  }

  getProductId(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (param) => {
        this.productId = param.get('id')!;
        this.loadProduct();
        this.loadReviewsForProduct();
        this.loadProducts();
      }
    })
  }

  loadProduct(): void {
    this.activatedRoute.data.subscribe({
      next: ({ product }) => {
        console.log(product);
        this.product = product.data;
        this.breadcrumbs = [
          { label: 'Home', link: '/home' },
          { label: product.data.category.name, link: `/categories/${product.data.category._id}` },
          { label: product.data.subcategory[0].name },
          { label: product.data.title },
        ];
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  loadReviewsForProduct(): void {
    this.reviewService.getAllForProduct(this.productId).subscribe({
      next: (res) => {
        console.log(res);
        this.reviews = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  loadProducts(): void {
    this.productService.getAll({ categoryId: this.product.category._id }).subscribe({
      next: (res) => {
        console.log(res);
        this.products = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  setTab(tab: Tab): void {
    this.activeTab = tab;
  }
}
