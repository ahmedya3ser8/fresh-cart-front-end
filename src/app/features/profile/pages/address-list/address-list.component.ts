import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroBuildingLibrary, heroPlus, heroXMark } from '@ng-icons/heroicons/outline';
import { heroMapPinSolid, heroPencilSolid, heroPhoneSolid, heroTrashSolid } from '@ng-icons/heroicons/solid';

import { BreadcrumbComponent, PageHeaderComponent } from "../../../../shared";
import { Address } from '../../models/address';
import { AddressService } from '../../services';

@Component({
  selector: 'app-address-list',
  imports: [PageHeaderComponent, BreadcrumbComponent, NgIconComponent, ReactiveFormsModule],
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.css',
  providers: [
    provideIcons({
      heroMapPinSolid,
      heroPlus,
      heroTrashSolid,
      heroPencilSolid,
      heroPhoneSolid,
      heroBuildingLibrary,
      heroXMark
    })
  ]
})
export class AddressListComponent implements OnInit {
  breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'My Addresses' },
  ];

  private readonly addressService = inject(AddressService);
  private readonly fb = inject(FormBuilder);

  addressess: Address[] = [];
  isOpen = false;
  form!: FormGroup;

  ngOnInit(): void {
    this.initForm();
    this.loadAddressess();
  }

  loadAddressess(): void {
    this.addressService.getUserAddresses().subscribe({
      next: (res) => {
        console.log(res);
        this.addressess = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  initForm(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      details: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      city: [null, [Validators.required]]
    })
  }

  submitForm(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.addressService.addAddress(this.form.value).subscribe({
        next: (res) => {
          console.log(res);
          this.addressess = res.data;
          this.isOpen = false;
        },
        error: (err) => {
          console.log(err);
        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }

  deleteAddress(addressId: string): void {
    this.addressService.removeAddress(addressId).subscribe({
      next: (res) => {
        console.log(res);
        this.addressess = res.data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onEdit(address: Address): void {
    console.log(address);
    this.form.patchValue({
      name: address.name,
      details: address.details,
      phone: address.phone,
      city: address.city
    })
    this.isOpen = true;
  }
}
