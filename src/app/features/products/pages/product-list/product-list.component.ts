import { Component, inject, OnInit } from '@angular/core';

import { provideIcons } from "@ng-icons/core";
import { heroCubeSolid } from '@ng-icons/heroicons/solid';

import { PageHeaderComponent, ProductCardComponent, BreadcrumbComponent, ProductCardSkeletonComponent } from "../../../../shared";
import { Product } from '../../models/product';
import { ProductService } from '../../services';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, PageHeaderComponent, BreadcrumbComponent, ProductCardSkeletonComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [
    provideIcons({
      heroCubeSolid
    })
  ]
})
export class ProductListComponent implements OnInit {
  private readonly productService = inject(ProductService);

  products: Product[] = [];
  isLoading = false;

  breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'All Products' },
  ];

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.productService.getAll().subscribe({
      next: (res) => {
        console.log(res);
        this.products = res.data;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      }
    })
  }
}
