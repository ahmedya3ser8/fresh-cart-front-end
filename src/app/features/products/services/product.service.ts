import { Injectable } from '@angular/core';

import { API_ENDPOINTS } from '../../../constants';
import { ApiDataResponse, ApiResponse, BaseHttpService, IPaginatedObj } from '../../../core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseHttpService {
  getAll(searchObj?: IPaginatedObj): Observable<ApiResponse<Product[]>> {
    let params = new HttpParams();
    if (searchObj?.brandId) {
      params = params.set('brand', searchObj.brandId);
    }
    if (searchObj?.categoryId) {
      params = params.set('category[in]', searchObj.categoryId);
    }
    return this.get<ApiResponse<Product[]>>(API_ENDPOINTS.PRODUCTS.GET_ALL, params);
  }

  getById(id: string): Observable<ApiDataResponse<Product>> {
    return this.get<ApiDataResponse<Product>>(API_ENDPOINTS.PRODUCTS.GET_BY_ID(id));
  }
}
