import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { BaseHttpService } from '../../../core';
import { API_ENDPOINTS } from '../../../constants';
import { Wishlist, WishlistDto } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WishlistService extends BaseHttpService {
  wishlistIds = new BehaviorSubject<string[]>([]);
  wishlist = new BehaviorSubject<Wishlist | null>(null);

  getUserWishlist(): Observable<Wishlist> {
    return this.get<Wishlist>(API_ENDPOINTS.WISHLIST.GET_USER_WISHLIST).pipe(
      tap(res => {
        this.wishlist.next(res);
        const ids = res.data.map(product => product._id);
        this.wishlistIds.next(ids);
      })
    )
  }

  addProductToWishlist(productId: string): Observable<WishlistDto> {
    return this.post<WishlistDto>(API_ENDPOINTS.WISHLIST.ADD_PRODUCT_TO_WISHLIST, { productId }).pipe(
      tap(res => {
        this.getUserWishlist().subscribe();
      })
    )
  }

  removeProductFromWishlist(productId: string): Observable<WishlistDto> {
    return this.delete<WishlistDto>(API_ENDPOINTS.WISHLIST.DELETE_PRODUCT_FROM_WISHLIST(productId)).pipe(
      tap(res => {
        this.getUserWishlist().subscribe();
      })
    )
  }

  isInWishlist(productId: string): boolean {
    return this.wishlistIds.value.includes(productId);
  }
}
