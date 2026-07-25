import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroSquares2x2Solid, heroTagSolid } from '@ng-icons/heroicons/solid';

import { CategoryService } from '../../services';
import { ProductService } from '../../../products';
import { Category } from '../../models/category';
import { Product } from '../../../products/models/product';
import { ProductCardComponent, PageHeaderComponent, BreadcrumbComponent, ProductCardSkeletonComponent } from "../../../../shared";
import { Breadcrumb } from '../../../../core';

@Component({
  selector: 'app-category-details',
  imports: [NgIconComponent, ProductCardComponent, PageHeaderComponent, RouterLink, BreadcrumbComponent, ProductCardSkeletonComponent],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css',
  providers: [
    provideIcons({
      heroSquares2x2Solid,
      heroTagSolid
    })
  ]
})
export class CategoryDetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly categoryService = inject(CategoryService);
  private readonly productService = inject(ProductService);

  categoryId!: string;
  category: Category = {} as Category;
  products: Product[] = [];
  breadcrumbs: Breadcrumb[] = [];
  isLoading = false;

  ngOnInit(): void {
    this.getCategoryId();
  }

  getCategoryId(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (param) => {
        this.categoryId = param.get('id')!;
        console.log(param.get('id'));
        this.loadCategory();
        this.loadProducts();
      }
    })
  }

  loadCategory(): void {
    this.categoryService.getById(this.categoryId).subscribe({
      next: (res) => {
        console.log(res);
        this.category = res.data;
        this.breadcrumbs = [
          { label: 'Home', link: '/home' },
          { label: 'Categories', link: '/categories' },
          { label: res.data.name }
        ];
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  loadProducts(): void {
    this.isLoading = true;
    this.productService.getAll({ categoryId: this.categoryId }).subscribe({
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
