import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroStarSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-rating-distribution',
  imports: [NgIconComponent, DecimalPipe],
  templateUrl: './rating-distribution.component.html',
  styleUrl: './rating-distribution.component.css',
  providers: [
    provideIcons({
      heroStarSolid
    })
  ]
})
export class RatingDistributionComponent {
  @Input({ required: true }) ratingPercentages!: Record<number, number>;
}
