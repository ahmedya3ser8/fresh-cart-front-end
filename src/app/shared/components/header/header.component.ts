import { Component, ElementRef, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroArrowRightOnRectangle, heroClipboardDocumentList, heroCog6Tooth, heroHeart, heroShoppingBag, heroShoppingCart, heroUser, heroUserCircle } from '@ng-icons/heroicons/outline';
import { heroChatBubbleLeftRightSolid, heroEnvelopeSolid, heroGiftSolid, heroPhoneSolid, heroTruckSolid, heroUserPlusSolid, heroUserSolid } from '@ng-icons/heroicons/solid';
import { AuthService, User } from '../../../features/auth';

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
export class HeaderComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  @ViewChild('dropDownContainer') dropDownContainer!: ElementRef;

  currentUser: User | null = this.authService.getCurrentUser();

  isDropDownOpen: boolean = false;

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
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
