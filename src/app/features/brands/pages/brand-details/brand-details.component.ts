import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroTagSolid } from '@ng-icons/heroicons/solid';

import { PageHeaderComponent, ProductCardComponent, BreadcrumbComponent } from "../../../../shared";
import { BrandService } from '../../services';
import { Brand } from '../../models/brand';
import { ProductService } from '../../../products';
import { Product } from '../../../products/models/product';
import { Breadcrumb } from '../../../../core';

@Component({
  selector: 'app-brand-details',
  imports: [PageHeaderComponent, ProductCardComponent, NgIcon, RouterLink, BreadcrumbComponent],
  templateUrl: './brand-details.component.html',
  styleUrl: './brand-details.component.css',
  providers: [
    provideIcons({
      heroTagSolid
    })
  ]
})
export class BrandDetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly brandService = inject(BrandService);
  private readonly productService = inject(ProductService);

  brandId!: string;
  brand: Brand = {} as Brand;
  products: Product[] = [];
  breadcrumbs: Breadcrumb[] = [];

  ngOnInit(): void {
    this.getBrandId();
  }

  getBrandId(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (param) => {
        this.brandId = param.get('id')!;
        console.log(param.get('id'));
        this.loadBrand();
        this.loadProducts();
      }
    })
  }

  loadBrand(): void {
    this.brandService.getById(this.brandId).subscribe({
      next: (res) => {
        console.log(res);
        this.brand = res.data;
        this.breadcrumbs = [
          { label: 'Home', link: '/home' },
          { label: 'Brands', link: '/brands' },
          { label: res.data.name }
        ];
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  loadProducts(): void {
    this.productService.getAll({ brandId: this.brandId }).subscribe({
      next: (res) => {
        console.log(res);
        this.products = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
