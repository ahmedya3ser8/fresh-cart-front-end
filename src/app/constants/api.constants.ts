export const API_ENDPOINTS = {
  AUTH: {
    SIGNUP: '/v1/auth/signup',
    SIGNIN: '/v1/auth/signin',
  },
  CATEGORIES: {
    BASE: '/v1/categories'
  },
  PRODUCTS: {
    BASE: '/v1/products'
  },
  BRANDS: {
    BASE: '/v1/brands'
  },
} as const;
