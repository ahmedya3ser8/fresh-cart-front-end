export interface Review {
  _id: string;
  user: {
    _id: string;
    name: string;
  },
  review: string;
  rating: number;
  product: string;
  createdAt: string;
  updatedAt: string;
}
