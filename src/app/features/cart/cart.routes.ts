import { Routes } from '@angular/router';

export const CART_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/cart-list/cart-list.component').then((c) => c.CartListComponent)
  }
];
