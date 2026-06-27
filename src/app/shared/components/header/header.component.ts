import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroHeart, heroShoppingCart } from '@ng-icons/heroicons/outline';
import {
  heroChatBubbleLeftRightSolid,
  heroEnvelopeSolid,
  heroGiftSolid,
  heroPhoneSolid,
  heroTruckSolid,
  heroUserPlusSolid,
  heroUserSolid,
} from '@ng-icons/heroicons/solid';

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
      heroShoppingCart
    })
  ]
})
export class HeaderComponent {

}
