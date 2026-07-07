import { Routes } from '@angular/router';

export const BRAND_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/brand-list/brand-list.component').then((c) => c.BrandListComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./pages/brand-details/brand-details.component').then((c) => c.BrandDetailsComponent)
  }
];
