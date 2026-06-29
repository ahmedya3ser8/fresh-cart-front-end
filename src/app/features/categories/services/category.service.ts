import { Injectable } from '@angular/core';

import { API_ENDPOINTS } from '../../../constants';
import { BaseHttpService } from '../../../core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseHttpService<Category> {
  override getResourceUrl(): string {
    return API_ENDPOINTS.CATEGORIES.BASE;
  }
}
