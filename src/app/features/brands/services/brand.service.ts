import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiDataResponse, ApiResponse, BaseHttpService } from '../../../core';
import { API_ENDPOINTS } from '../../../constants';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService extends BaseHttpService {
  getAll(): Observable<ApiResponse<Brand[]>> {
    return this.get<ApiResponse<Brand[]>>(API_ENDPOINTS.BRANDS.GET_ALL);
  }

  getById(id: string): Observable<ApiDataResponse<Brand>> {
    return this.get<ApiDataResponse<Brand>>(API_ENDPOINTS.BRANDS.GET_BY_ID(id));
  }
}
