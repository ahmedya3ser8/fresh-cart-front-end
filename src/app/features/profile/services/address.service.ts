import { Injectable } from '@angular/core';

import { API_ENDPOINTS } from '../../../constants';
import { BaseHttpService } from '../../../core';
import { AddressResponse } from '../models/address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService extends BaseHttpService {
  getUserAddresses(): Observable<AddressResponse> {
    return this.get<AddressResponse>(API_ENDPOINTS.ADDRESS.GET_USER_ADDRESSES);
  }

  addAddress(body: { name: string, details: string, phone: string, city: string }): Observable<AddressResponse> {
    return this.post<AddressResponse>(API_ENDPOINTS.ADDRESS.ADD_ADDRESS, body)
  }

  removeAddress(id: string): Observable<AddressResponse> {
    return this.delete<AddressResponse>(API_ENDPOINTS.ADDRESS.REMOVE_ADDRESS(id))
  }
}
