import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { APP_CONSTANTS } from '../../constants';
import { ApiResponse, IPaginatedObj } from '../models';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseHttpService<T> {
  protected baseUrl = APP_CONSTANTS.API_BASE_URL + this.getResourceUrl();

  protected readonly http = inject(HttpClient);

  abstract getResourceUrl(): string;

  getAll(searchObj?: IPaginatedObj): Observable<ApiResponse<T[]>> {
    let params = new HttpParams();
      if (searchObj?.brandId) {
        params = params.set('brand', searchObj.brandId);
      }
      if (searchObj?.categoryId) {
        params = params.set('category[in]', searchObj.categoryId);
      }
    return this.http.get<ApiResponse<T[]>>(this.baseUrl, { params });
  }

  getById(id: string): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(`${this.baseUrl}/${id}`);
  }

  create(body: T): Observable<ApiResponse<T>> {
    return this.http.post<ApiResponse<T>>(this.baseUrl, body);
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${endpoint}`, body);
  }

  update(id: string, body: T): Observable<ApiResponse<T>> {
    return this.http.put<ApiResponse<T>>(`${this.baseUrl}/${id}`, body);
  }

  delete(id: string): Observable<ApiResponse<T>> {
    return this.http.delete<ApiResponse<T>>(`${this.baseUrl}/${id}`);
  }
}
