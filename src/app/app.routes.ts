import { Routes } from '@angular/router';

import { guestGuard } from './core';

export const routes: Routes = [
  {
    path: 'auth',
    canActivate: [guestGuard],
    loadChildren: () => import('./features/auth/auth.routes').then((r) => r.AUTH_ROUTES)
  },
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./features/home/home.routes').then((r) => r.HOME_ROUTES)
      },
      {
        path: 'products',
        loadChildren: () => import('./features/products/product.routes').then((r) => r.PRODUCT_ROUTES)
      },
      {
        path: 'categories',
        loadChildren: () => import('./features/categories/category.routes').then((r) => r.CATEGORY_ROUTES)
      },
    ]
  },
];
