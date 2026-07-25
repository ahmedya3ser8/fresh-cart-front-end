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
  CART: {
    BASE: '/v2/cart'
  },
  WISHLIST: {
    BASE: '/v1/wishlist'
  },
  ORDER: {
    BASE: '/v1/orders'
  },
} as const;
