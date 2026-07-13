import { Product } from "../../products/models";

export interface Cart {
  cartId: string | null;
  message: string;
  numOfCartItems: number;
  status: string;
  data: CartData;
}

export interface CartData {
  cartOwner: string;
  _id: string;
  totalCartPrice: number;
  products: CartProduct[];
}

export interface CartProduct {
  _id: string;
  price: number;
  count: number;
  product: Product;
}

export interface CreateCartDto {
  productId: string;
}

export interface UpdateCartDto {
  count: number;
}
