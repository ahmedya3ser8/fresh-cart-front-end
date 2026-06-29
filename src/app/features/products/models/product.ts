import { Category } from "../../categories/models/category";

export interface Product {
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  priceAfterDiscount: number;
  imageCover: string;
  category: Category;
  brand: {
    _id: string;
    name: string;
    slug: string;
    image: string;
  };
  ratingsAverage: number;
  ratingsQuantity: number;
  images: string[];
  sold: number;
  subcategory: {
    _id: string;
    name: string;
    slug: string;
    category: string;
  }
}
