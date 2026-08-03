import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_ENDPOINTS } from '../../../constants';
import { ApiDataResponse, ApiResponse, BaseHttpService } from '../../../core';
import { Review } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ReviewService extends BaseHttpService {
  getAll(): Observable<ApiResponse<Review[]>> {
    return this.http.get<ApiResponse<Review[]>>(API_ENDPOINTS.REVIEWS.GET_ALL);
  }

  getById(id: string): Observable<ApiDataResponse<Review>> {
    return this.http.get<ApiDataResponse<Review>>(API_ENDPOINTS.REVIEWS.GET_BY_ID(id));
  }

  getAllForProduct(productId: string): Observable<ApiResponse<Review[]>> {
    return this.http.get<ApiResponse<Review[]>>(API_ENDPOINTS.REVIEWS.GET_ALL_FOR_PRODUCTS(productId));
  }

  createReviewForProduct(productId: string, body: { review: string; rating: number }): Observable<ApiDataResponse<Review>> {
    return this.http.post<ApiDataResponse<Review>>(API_ENDPOINTS.REVIEWS.CREATE(productId), body);
  }
}
