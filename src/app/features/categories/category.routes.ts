import { Routes } from '@angular/router';

export const CATEGORY_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/category-list/category-list.component').then((c) => c.CategoryListComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./pages/category-details/category-details.component').then((c) => c.CategoryDetailsComponent)
  }
];
