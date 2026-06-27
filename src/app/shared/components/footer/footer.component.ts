import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroEnvelopeSolid, heroMapPinSolid, heroPhoneSolid } from '@ng-icons/heroicons/solid';

interface Item {
  link: string;
  text: string;
}

interface Menu {
  id: number;
  title: string;
  items: Item[];
}

@Component({
  selector: 'app-footer',
  imports: [NgIconComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers: [
    provideIcons({
      heroPhoneSolid,
      heroEnvelopeSolid,
      heroMapPinSolid
    })
  ]
})
export class FooterComponent {
  menuList: Menu[] = [
    {
      id: 1,
      title: 'Shop',
      items: [
        { link: '', text: 'All Products' },
        { link: '', text: 'Categories' },
        { link: '', text: 'Brands' },
        { link: '', text: 'Electronics' },
        { link: '', text: 'Men\'s Fashion' },
        { link: '', text: 'Women\'s Fashion' },
      ]
    },
    {
      id: 2,
      title: 'Account',
      items: [
        { link: '', text: 'My Account' },
        { link: '', text: 'Order History' },
        { link: '', text: 'Wishlist' },
        { link: '', text: 'Shopping Cart' },
        { link: '', text: 'Sign In' },
        { link: '', text: 'Create Account' },
      ]
    },
    {
      id: 3,
      title: 'Support',
      items: [
        { link: '', text: 'Contact Us' },
        { link: '', text: 'Help Center' },
        { link: '', text: 'Shipping Info' },
        { link: '', text: 'Returns & Refunds' },
        { link: '', text: 'Track Order' },
      ]
    },
    {
      id: 4,
      title: 'Legal',
      items: [
        { link: '', text: 'Privacy Policy' },
        { link: '', text: 'Terms of Service' },
        { link: '', text: 'Cookie Policy' },
      ]
    },
  ];
}
