import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { APP_CONSTANTS } from '../../../constants';
import { ApiResponse } from '../../../core';
import { Review } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private readonly http = inject(HttpClient);

  getAll(): Observable<ApiResponse<Review[]>> {
    return this.http.get<ApiResponse<Review[]>>(`${APP_CONSTANTS.API_BASE_URL}/v1/reviews`);
  }

  getAllForProduct(productId: string): Observable<ApiResponse<Review[]>> {
    return this.http.get<ApiResponse<Review[]>>(`${APP_CONSTANTS.API_BASE_URL}/v1/products/${productId}/reviews`);
  }

  getById(reviewId: string): Observable<ApiResponse<Review>> {
    return this.http.get<ApiResponse<Review>>(`${APP_CONSTANTS.API_BASE_URL}/api/v1/reviews/${reviewId}`);
  }

  createReviewForProduct(productId: string, body: { review: string; rating: number }): Observable<ApiResponse<Review>> {
    return this.http.post<ApiResponse<Review>>(`${APP_CONSTANTS.API_BASE_URL}/v1/products/${productId}/reviews`, body);
  }
}
