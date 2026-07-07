import { Routes } from '@angular/router';

import { productResolver } from './resolvers';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/product-list/product-list.component').then((c) => c.ProductListComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./pages/product-details/product-details.component').then((c) => c.ProductDetailsComponent),
    resolve: {
      product: productResolver
    }
  },
];
