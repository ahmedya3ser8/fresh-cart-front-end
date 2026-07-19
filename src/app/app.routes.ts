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
      {
        path: 'brands',
        loadChildren: () => import('./features/brands/brand.routes').then((r) => r.BRAND_ROUTES)
      },
      {
        path: 'contact',
        loadChildren: () => import('./features/contact/contact.routes').then((r) => r.CONTACT_ROUTES)
      },
      {
        path: 'cart',
        loadChildren: () => import('./features/cart/cart.routes').then((r) => r.CART_ROUTES)
      },
      {
        path: 'wishlist',
        loadChildren: () => import('./features/wishlist/wishlist.routes').then((r) => r.WISHLIST_ROUTES)
      },
    ]
  },
];
