import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent, FooterComponent } from "./shared";
import { WishlistService } from './features/wishlist';
import { AuthService } from './features/auth';
import { CartService } from './features/cart';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'fresh-cart-front-end';
  private readonly wishlistService = inject(WishlistService);
  private readonly cartService = inject(CartService);
  private readonly authService = inject(AuthService);

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.wishlistService.loadWishlist();
      this.cartService.loadCart();
    }
  }
}
