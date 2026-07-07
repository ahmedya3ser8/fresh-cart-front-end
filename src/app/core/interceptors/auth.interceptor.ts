import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { AuthService } from '../../features/auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  if(token) {
    req = req.clone({
      setHeaders: {
        token,
        'Content-Type': 'application/json'
      }
    })
  }

  return next(req);
};
