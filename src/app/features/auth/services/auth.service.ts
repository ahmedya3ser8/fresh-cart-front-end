import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

import { BaseHttpService } from '../../../core';
import { API_ENDPOINTS, APP_CONSTANTS } from '../../../constants';
import { AuthResponse, SigninForm, SignupForm, User } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseHttpService<AuthResponse> {
  private readonly platformId = inject(PLATFORM_ID);

  private currentUserSubject = new BehaviorSubject<User | null>(this.loadStoredUser());
  public currentUser$ = this.currentUserSubject.asObservable();

  override getResourceUrl(): string {
    return '';
  }

  private loadStoredUser(): User | null {
    if (isPlatformBrowser(this.platformId)) {
      const user = localStorage.getItem(APP_CONSTANTS.USER_KEY);
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  signup(form: SignupForm): Observable<AuthResponse> {
    return this.post<AuthResponse>(API_ENDPOINTS.AUTH.SIGNUP, form).pipe(
      tap(res => {
        console.log('AuthService signup response:', res);
        if (res.token) {
          this.setSession(res);
        }
      })
    );
  }

  signin(form: SigninForm): Observable<AuthResponse> {
    return this.post<AuthResponse>(API_ENDPOINTS.AUTH.SIGNIN, form).pipe(
      tap(res => {
        console.log('AuthService signin response:', res);
        if (res.token) {
          this.setSession(res);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem(APP_CONSTANTS.TOKEN_KEY);
    localStorage.removeItem(APP_CONSTANTS.USER_KEY);
    this.currentUserSubject.next(null);
  }

  private setSession(res: AuthResponse): void {
    console.log('Setting session with token:', res.token);
    localStorage.setItem(APP_CONSTANTS.TOKEN_KEY, res.token);
    localStorage.setItem(APP_CONSTANTS.USER_KEY, JSON.stringify(res.user));
    this.currentUserSubject.next(res.user);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }
    return !!localStorage.getItem(APP_CONSTANTS.TOKEN_KEY);
  }

  getToken(): string | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }
    return localStorage.getItem(APP_CONSTANTS.TOKEN_KEY);
  }
}
