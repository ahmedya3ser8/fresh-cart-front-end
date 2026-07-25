import { Routes } from '@angular/router';

export const CART_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/cart-list/cart-list.component').then((c) => c.CartListComponent)
  },
  {
    path: 'checkout/:id',
    loadComponent: () => import('./pages/checkout/checkout.component').then((c) => c.CheckoutComponent)
  },
];
