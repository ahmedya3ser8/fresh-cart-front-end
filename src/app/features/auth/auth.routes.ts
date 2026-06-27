import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadComponent: () => import('./pages/signin/signin.component').then((c) => c.SigninComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/signup/signup.component').then((c) => c.SignupComponent)
  },
];
