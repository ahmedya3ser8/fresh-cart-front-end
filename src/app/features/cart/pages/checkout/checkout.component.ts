import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroClipboardDocumentListSolid, heroCreditCardSolid, heroExclamationCircleSolid, heroHomeSolid, heroShoppingBagSolid } from '@ng-icons/heroicons/solid';

import { BreadcrumbComponent } from "../../../../shared";
import { CartService } from '../../services';
import { Cart } from '../../models/cart';
import { OrderService } from '../../../orders';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [BreadcrumbComponent, NgIconComponent, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  providers: [
    provideIcons({
      heroClipboardDocumentListSolid,
      heroHomeSolid,
      heroExclamationCircleSolid,
      heroCreditCardSolid,
      heroShoppingBagSolid
    })
  ]
})
export class CheckoutComponent implements OnInit {
  breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'Cart', link: '/cart' },
    { label: 'Checkout' }
  ];

  private readonly fb = inject(FormBuilder);
  private readonly cartService = inject(CartService);
  private readonly orderService = inject(OrderService);
  private readonly activatedRoute = inject(ActivatedRoute);

  payment: string = 'cash';
  cartId!: string;
  form!: FormGroup;

  ngOnInit(): void {
    this.initForm();
    this.getCartId();
    this.cartService.loadCart();
  }

  get cart(): Cart | null {
    return this.cartService.cart.value;
  }

  get isLoading(): boolean {
    return this.cartService.isLoading.value;
  }

  getCartId(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (url) => {
        this.cartId = url.get('id')!;
      }
    })
  }

  initForm(): void {
    this.form = this.fb.group({
      details: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      city: [null, [Validators.required]]
    })
  }

  submitForm(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      console.log(this.payment);
      if (this.payment === 'cash') {
        this.orderService.createCashOrder(this.cartId, this.form.value);
      } else {
        this.orderService.createOnlineOrder(this.cartId, this.form.value);
      }
    }
    else {
      this.form.markAllAsTouched();
    }
  }

  paymentMethod(e: Event): void {
    const input = e.target as HTMLInputElement;
    this.payment = input.value;
  }
}
