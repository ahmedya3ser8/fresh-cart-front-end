import { Product } from "../../products/models";

export interface Wishlist {
  count: number;
  status: string;
  data: Product[];
}

export interface WishlistDto {
  status: string;
  message: string;
  data: string[];
}
