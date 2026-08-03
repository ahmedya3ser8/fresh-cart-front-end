export const API_ENDPOINTS = {
  AUTH: {
    SIGNUP: '/v1/auth/signup',
    SIGNIN: '/v1/auth/signin',
    FORGOT_PASSWORD: '/v1/auth/forgotPasswords',
    VERIFY_RESET_CODE: '/v1/auth/verifyResetCode',
    RESET_PASSWORD: '/v1/auth/resetPassword',
    UPDATE_LOGGED_USER: '/v1/users/updateMe/',
    UPDATE_LOGGED_PASSWORD: '/v1/users/changeMyPassword'
  },
  CATEGORIES: {
    BASE: '/categories',
    GET_ALL: '/v1/categories',
    GET_BY_ID: (id: string) => `/v1/categories/${id}`
  },
  PRODUCTS: {
    BASE: '/products',
    GET_ALL: '/v1/products',
    GET_BY_ID: (id: string) => `/v1/products/${id}`
  },
  BRANDS: {
    BASE: '/brands',
    GET_ALL: '/v1/brands',
    GET_BY_ID: (id: string) => `/v1/brands/${id}`
  },
  CART: {
    BASE: '/cart',
    GET_USER_CART: '/v2/cart',
    ADD_PRODUCT_TO_CART: '/v2/cart',
    UPDATE_CART_PRODUCT_QUANTITY: (id: string) => `/v2/cart/${id}`,
    DELETE_PRODUCT_FROM_CART: (id: string) => `/v2/cart/${id}`,
    CLEAR_CART: () => '/v2/cart/' ,
  },
  WISHLIST: {
    BASE: '/wishlist',
    GET_USER_WISHLIST: '/v1/wishlist',
    ADD_PRODUCT_TO_WISHLIST: '/v1/wishlist',
    DELETE_PRODUCT_FROM_WISHLIST: (id: string) => `/v1/wishlist/${id}`,
  },
  ORDER: {
    BASE: '/orders',
    GET_USER_ORDERS: (userId: string) => `/v1/orders/user/${userId}`,
    CREATE_CASH_ORDER: (cartId: string) => `/v1/orders/${cartId}`,
    CREATE_ONLINE_ORDER: (cartId: string) => `/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
  },
  USER: {
    BASE: '/v1/users'
  },
  ADDRESS: {
    BASE: '/addresses',
    GET_USER_ADDRESSES: '/v1/addresses',
    ADD_ADDRESS: '/v1/addresses',
    REMOVE_ADDRESS: (id: string) => `/v1/addresses/${id}`
  },
  REVIEWS: {
    BASE: '/reviews',
    GET_ALL: '/v1/reviews',
    GET_BY_ID: (id: string) => `/v1/reviews/${id}`,
    GET_ALL_FOR_PRODUCTS: (id: string) => `/v1/products/${id}/reviews`,
    CREATE: (id: string) => `/v1/products/${id}/reviews`,
  }
} as const;
