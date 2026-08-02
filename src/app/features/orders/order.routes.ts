import { Routes } from '@angular/router';

export const ORDER_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/all-orders/all-orders.component').then((c) => c.AllOrdersComponent)
  },
];
