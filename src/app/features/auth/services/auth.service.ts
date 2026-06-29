import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { BaseHttpService } from '../../../core';
import { API_ENDPOINTS, APP_CONSTANTS } from '../../../constants';
import { AuthResponse, SigninForm, SignupForm } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseHttpService<AuthResponse> {

  override getResourceUrl(): string {
    return '';
  }

  signup(form: SignupForm): Observable<AuthResponse> {
    return this.post<AuthResponse>(API_ENDPOINTS.AUTH.SIGNUP, form).pipe(
      tap(res => {
        console.log('AuthService signup response:', res);
        if (res.token) {
          this.setSession(res)
        }
      })
    );
  }

  signin(form: SigninForm): Observable<AuthResponse> {
    return this.post<AuthResponse>(API_ENDPOINTS.AUTH.SIGNIN, form).pipe(
      tap(res => {
        console.log('AuthService signin response:', res);
        if (res.token) {
          this.setSession(res)
        }
      })
    );
  }

  private setSession(res: AuthResponse): void {
    console.log('Setting session with token:', res.token);
    localStorage.setItem(APP_CONSTANTS.TOKEN_KEY, res.token);
    console.log('Token saved to localStorage:', localStorage.getItem(APP_CONSTANTS.TOKEN_KEY));
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(APP_CONSTANTS.TOKEN_KEY);
  }
}
