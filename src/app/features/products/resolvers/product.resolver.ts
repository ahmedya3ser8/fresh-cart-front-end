import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';

import { ApiDataResponse } from '../../../core';
import { Product } from '../models';
import { ProductService } from '../services';

export const productResolver: ResolveFn<ApiDataResponse<Product>> = (route, state) => {
  const productService = inject(ProductService);
  const productId = route.paramMap.get('id')!;
  return productService.getById(productId);
};
