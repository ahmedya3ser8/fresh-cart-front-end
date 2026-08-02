import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { BaseHttpService } from '../../../core';
import { API_ENDPOINTS } from '../../../constants';
import { CreateWishlistDto, Wishlist, WishlistDto } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WishlistService extends BaseHttpService<Wishlist, CreateWishlistDto> {
  override getResourceUrl(): string {
    return API_ENDPOINTS.WISHLIST.BASE;
  }

  wishlistIds = new BehaviorSubject<string[]>([]);
  wishlist = new BehaviorSubject<Wishlist | null>(null);

  loadWishlist(): void {
    this.get<Wishlist>().subscribe({
      next: (res) => {
        console.log(res);
        this.wishlist.next(res);
        const ids = res.data.map(product => product._id);
        this.wishlistIds.next(ids);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  addProductToWishlist(productId: string): void {
    this.post<WishlistDto>('', { productId }).subscribe({
      next: (res) => {
        console.log(res);
        this.loadWishlist();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  removeProductFromWishlist(productId: string): void {
    this.delete<WishlistDto>(productId).subscribe({
      next: (res) => {
        console.log(res);
        this.loadWishlist();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  isInWishlist(productId: string): boolean {
    return this.wishlistIds.value.includes(productId);
  }
}
