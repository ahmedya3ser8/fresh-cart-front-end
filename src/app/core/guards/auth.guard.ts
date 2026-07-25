import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../../features/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isLoggedIn = authService.isLoggedIn();
  console.log('AuthGuard - isLoggedIn:', isLoggedIn);

  if (isLoggedIn) {
    console.log('AuthGuard - Allowing access');
    return true;
  }

  console.log('AuthGuard - Redirecting to login');
  return router.createUrlTree(['/auth/signin']);
};
