import { Injectable } from '@angular/core';

import { BaseHttpService } from '../../../core';
import { API_ENDPOINTS } from '../../../constants';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService extends BaseHttpService<Brand> {
  override getResourceUrl(): string {
    return API_ENDPOINTS.BRANDS.BASE;
  }
}
