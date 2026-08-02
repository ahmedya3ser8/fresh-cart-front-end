import { Injectable } from '@angular/core';

import { API_ENDPOINTS } from '../../../constants';
import { BaseHttpService } from '../../../core';
import { AddressResponse } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService extends BaseHttpService<AddressResponse> {
  override getResourceUrl(): string {
    return API_ENDPOINTS.ADDRESS.BASE;
  }
}
