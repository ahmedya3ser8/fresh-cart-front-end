import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { ProductService } from '../services';
import { ApiResponse } from '../../../core';
import { Product } from '../models';

export const productResolver: ResolveFn<ApiResponse<Product>> = (route, state) => {
  const productService = inject(ProductService);
  const productId = route.paramMap.get('id')!;
  return productService.getById(productId);
};
