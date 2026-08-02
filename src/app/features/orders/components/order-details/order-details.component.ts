import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroMapPinSolid, heroShoppingBagSolid, heroTruckSolid } from '@ng-icons/heroicons/solid';

import { OrderData } from '../../models';

@Component({
  selector: 'app-order-details',
  imports: [NgIconComponent, DecimalPipe],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css',
  providers: [
    provideIcons({
      heroShoppingBagSolid,
      heroMapPinSolid,
      heroTruckSolid
    })
  ]
})
export class OrderDetailsComponent {
  @Input({ required: true }) order!: OrderData;
}
