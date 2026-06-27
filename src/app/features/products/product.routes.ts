import { Routes } from '@angular/router';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/product-list/product-list.component').then((c) => c.ProductListComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./pages/product-details/product-details.component').then((c) => c.ProductDetailsComponent)
  },
];
