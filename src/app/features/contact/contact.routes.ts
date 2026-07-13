import { Routes } from '@angular/router';

export const CONTACT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/contact-list/contact-list.component').then((c) => c.ContactListComponent)
  }
];
