import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroHeartSolid, heroShoppingCartSolid, heroTrashSolid } from '@ng-icons/heroicons/solid';

import { BreadcrumbComponent } from "../../../../shared";
import { WishlistService } from '../../services';
import { Wishlist } from '../../models';
import { heroArrowLongRight, heroHeart } from '@ng-icons/heroicons/outline';
import { CartService } from '../../../cart';

@Component({
  selector: 'app-wishlist',
  imports: [BreadcrumbComponent, NgIconComponent, RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
  providers: [
    provideIcons({
      heroHeartSolid,
      heroShoppingCartSolid,
      heroTrashSolid,
      heroHeart,
      heroArrowLongRight
    })
  ]
})
export class WishlistComponent implements OnInit {
  private readonly wishlistService = inject(WishlistService);
  private readonly cartService = inject(CartService);

  get wishlist(): Wishlist | null {
    return this.wishlistService.wishlist.value;
  }

  breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'Wishlist' }
  ];

  ngOnInit(): void {
    this.wishlistService.getUserWishlist().subscribe();
  }

  removeProductFromWishlist(productId: string): void {
    this.wishlistService.removeProductFromWishlist(productId).subscribe();
  }

  addToCart(productId: string): void {
    this.cartService.addProductToCart(productId).subscribe();
  }
}
