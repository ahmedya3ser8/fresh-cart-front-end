export interface AddressResponse {
  status: string;
  results: number;
  data: Address[];
}

export interface Address {
  _id: string;
  city: string;
  details: string;
  name: string;
  phone: string;
}
