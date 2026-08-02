import { User } from "../../auth";
import { CartProduct } from "../../cart/models/cart";

export interface Order {
  status: string;
  data: OrderData;
}

export interface OrderData {
  _id: string;
  user: User;
  totalOrderPrice: number;
  taxPrice: number;
  shippingPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  id: number;
  shippingAddress: ShippingAddress;
  cartItems: CartProduct[];
  createdAt: string;
  updatedAt: string;
}

export interface ShippingAddress {
  city: string;
  details: string;
  phone: string;
}

export interface OnlineOrder {
  status: string;
  session: {
    cancel_url: string;
    success_url: string;
    url: string;
  }
}
