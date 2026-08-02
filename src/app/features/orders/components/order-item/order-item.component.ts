import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroArchiveBox, heroCalendar, heroChevronDown, heroHashtag, heroMapPin } from '@ng-icons/heroicons/outline';
import { heroClockSolid, heroTruckSolid } from '@ng-icons/heroicons/solid';

import { OrderData } from '../../models';

@Component({
  selector: 'app-order-item',
  imports: [NgIconComponent, DatePipe],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.css',
  providers: [
    provideIcons({
      heroTruckSolid,
      heroClockSolid,
      heroHashtag,
      heroChevronDown,
      heroMapPin,
      heroArchiveBox,
      heroCalendar
    })
  ]
})
export class OrderItemComponent {
  @Input({ required: true }) order!: OrderData;

  @Output() toggle = new EventEmitter<void>();
}
