import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroHeartSolid, heroShoppingCartSolid, heroTrashSolid } from '@ng-icons/heroicons/solid';

import { BreadcrumbComponent } from "../../../../shared";
import { WishlistService } from '../../services';
import { Wishlist } from '../../models';

@Component({
  selector: 'app-wishlist',
  imports: [BreadcrumbComponent, NgIconComponent, RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
  providers: [
    provideIcons({
      heroHeartSolid,
      heroShoppingCartSolid,
      heroTrashSolid
    })
  ]
})
export class WishlistComponent implements OnInit {
  private readonly wishlistService = inject(WishlistService);

  wishlist = this.wishlistService.wishlist;

  breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'Wishlist' }
  ];

  ngOnInit(): void {
    this.wishlistService.loadWishlist();
  }

  removeProductFromWishlist(productId: string): void {
    this.wishlistService.removeProductFromWishlist(productId);
  }
}
