import { Injectable } from '@angular/core';

import { API_ENDPOINTS } from '../../../constants';
import { BaseHttpService } from '../../../core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseHttpService<Product> {
  override getResourceUrl(): string {
    return API_ENDPOINTS.PRODUCTS.BASE;
  }
}
