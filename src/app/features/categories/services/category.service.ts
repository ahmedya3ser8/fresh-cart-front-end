import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_ENDPOINTS } from '../../../constants';
import { ApiDataResponse, ApiResponse, BaseHttpService } from '../../../core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseHttpService {
  getAll(): Observable<ApiResponse<Category[]>> {
    return this.get<ApiResponse<Category[]>>(API_ENDPOINTS.CATEGORIES.GET_ALL);
  }

  getById(id: string): Observable<ApiDataResponse<Category>> {
    return this.get<ApiDataResponse<Category>>(API_ENDPOINTS.CATEGORIES.GET_BY_ID(id));
  }
}
