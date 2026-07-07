import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { provideIcons } from '@ng-icons/core';
import { heroSquares2x2Solid } from '@ng-icons/heroicons/solid';

import { Category } from '../../models/category';
import { CategoryService } from '../../services';
import { PageHeaderComponent, BreadcrumbComponent } from "../../../../shared";

@Component({
  selector: 'app-category-list',
  imports: [PageHeaderComponent, RouterLink, BreadcrumbComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
  providers: [
    provideIcons({
      heroSquares2x2Solid
    })
  ]
})
export class CategoryListComponent implements OnInit {
  private readonly categoryService = inject(CategoryService);

  categories: Category[] = [];
  breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'Categories' },
  ];

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.getAll().subscribe({
      next: (res) => {
        console.log(res);
        this.categories = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
