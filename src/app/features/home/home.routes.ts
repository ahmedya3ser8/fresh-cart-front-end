import { Routes } from '@angular/router';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-list/home-list.component').then((c) => c.HomeListComponent)
  }
];
