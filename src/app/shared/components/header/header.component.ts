import { Component, ElementRef, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroArrowRightOnRectangle, heroClipboardDocumentList, heroCog6Tooth, heroHeart, heroShoppingBag, heroShoppingCart, heroUserCircle } from '@ng-icons/heroicons/outline';
import { heroChatBubbleLeftRightSolid, heroEnvelopeSolid, heroGiftSolid, heroPhoneSolid, heroTruckSolid, heroUserPlusSolid, heroUserSolid } from '@ng-icons/heroicons/solid';
import { AuthService, User } from '../../../features/auth';
import { CartService } from '../../../features/cart';
import { Cart } from '../../../features/cart/models/cart';

@Component({
  selector: 'app-header',
  imports: [NgIconComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [
    provideIcons({
      heroTruckSolid,
      heroGiftSolid,
      heroPhoneSolid,
      heroEnvelopeSolid,
      heroUserSolid,
      heroUserPlusSolid,
      heroChatBubbleLeftRightSolid,
      heroHeart,
      heroShoppingCart,
      heroArrowRightOnRectangle,
      heroUserCircle,
      heroCog6Tooth,
      heroShoppingBag,
      heroClipboardDocumentList,
    })
  ]
})
export class HeaderComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly cartService = inject(CartService);
  private readonly router = inject(Router);

  @ViewChild('dropDownContainer') dropDownContainer!: ElementRef;

  currentUser: User | null = null;
  cart: Cart | null = null;

  isDropDownOpen: boolean = false;
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.authService.currentUser$.subscribe({
      next: (user) => {
        this.currentUser = user;
        this.isLoggedIn = !!user;
      }
    });

    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
    });

    if (!this.cartService.currentCart) {
      this.cartService.get().subscribe({
        next: cart => this.cartService.setCart(cart)
      });
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/signin']);
  }

  toggleDropDown(): void {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  @HostListener('document:click', ['$event']) closeDropDown(e: Event) {
    if (this.dropDownContainer && !this.dropDownContainer.nativeElement.contains(e.target)) {
      this.isDropDownOpen = false;
    }
  }
}
