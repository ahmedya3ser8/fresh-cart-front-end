import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

import { provideIcons } from '@ng-icons/core';
import { heroTagSolid } from '@ng-icons/heroicons/solid';

import { PageHeaderComponent, BreadcrumbComponent } from "../../../../shared";
import { BrandService } from '../../services';
import { Brand } from '../../models/brand';

@Component({
  selector: 'app-brand-list',
  imports: [PageHeaderComponent, RouterLink, BreadcrumbComponent],
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.css',
  providers: [
    provideIcons({
      heroTagSolid
    })
  ]
})
export class BrandListComponent implements OnInit {
  private readonly brandService = inject(BrandService);

  brands: Brand[] = [];
  breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'Brands' },
  ];

  ngOnInit(): void {
    this.loadBrands();
  }

  loadBrands(): void {
    this.brandService.getAll().subscribe({
      next: (res) => {
        console.log(res);
        this.brands = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
