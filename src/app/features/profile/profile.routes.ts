import { Routes } from '@angular/router';

export const PROFILE_ROUTES: Routes = [
  {
    path: 'settings',
    loadComponent: () => import('./pages/settings/settings.component').then((c) => c.SettingsComponent)
  },
  {
    path: 'addresses',
    loadComponent: () => import('./pages/address-list/address-list.component').then((c) => c.AddressListComponent)
  },
];
