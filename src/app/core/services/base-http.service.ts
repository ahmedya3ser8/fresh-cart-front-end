import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { APP_CONSTANTS } from '../../constants';
import { ApiResponse, IPaginatedObj } from '../models';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseHttpService {
  protected baseUrl = APP_CONSTANTS.API_BASE_URL;

  protected readonly http = inject(HttpClient);

  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, { params });
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${endpoint}`, body);
  }

  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${endpoint}`, body);
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}/${endpoint}`);
  }

  // getAll(searchObj?: IPaginatedObj): Observable<ApiResponse<TEntity[]>> {
  //   let params = new HttpParams();
  //     if (searchObj?.brandId) {
  //       params = params.set('brand', searchObj.brandId);
  //     }
  //     if (searchObj?.categoryId) {
  //       params = params.set('category[in]', searchObj.categoryId);
  //     }
  //   return this.http.get<ApiResponse<TEntity[]>>(this.baseUrl, { params });
  // }

  // getById(id: string): Observable<ApiResponse<TEntity>> {
  //   return this.http.get<ApiResponse<TEntity>>(`${this.baseUrl}/${id}`);
  // }

  // create(body: TCreate): Observable<ApiResponse<TEntity>> {
  //   return this.http.post<ApiResponse<TEntity>>(this.baseUrl, body);
  // }

  // update(id: string, body: TUpdate): Observable<ApiResponse<TEntity>> {
  //   return this.http.put<ApiResponse<TEntity>>(`${this.baseUrl}/${id}`, body);
  // }

  // remove(id: string): Observable<ApiResponse<TEntity>> {
  //   return this.http.delete<ApiResponse<TEntity>>(`${this.baseUrl}/${id}`);
  // }

  // get<T>(endpoint: string = ''): Observable<T> {
  //   return this.http.get<T>(`${this.baseUrl}${endpoint}`);
  // }

  // post<T>(endpoint: string, body: any): Observable<T> {
  //   return this.http.post<T>(`${this.baseUrl}${endpoint}`, body);
  // }

  // put<T>(id: string, body: any): Observable<T> {
  //   return this.http.put<T>(`${this.baseUrl}/${id}`, body);
  // }

  // delete<T>(id?: string): Observable<T> {
  //   const url = id ? `${this.baseUrl}/${id}` : this.baseUrl;
  //   return this.http.delete<T>(url);
  // }
}
