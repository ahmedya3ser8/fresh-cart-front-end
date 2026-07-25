import { Component, inject, OnInit } from '@angular/core';

import { ProductCardComponent, SectionHeadingComponent, ProductCardSkeletonComponent } from "../../../../shared";
import { ProductService } from '../../../products';
import { Product } from '../../../products/models/product';

@Component({
  selector: 'app-featured-products',
  imports: [SectionHeadingComponent, ProductCardComponent, ProductCardSkeletonComponent],
  templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.css',
})
export class FeaturedProductsComponent implements OnInit {
  private readonly productService = inject(ProductService);

  products: Product[] = [];
  isLoading = false;

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
