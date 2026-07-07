import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroStarSolid } from '@ng-icons/heroicons/solid';
import { Review } from '../../models';

@Component({
  selector: 'app-review-card',
  imports: [NgIconComponent, DatePipe],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.css',
  providers: [
    provideIcons({
      heroStarSolid
    })
  ]
})
export class ReviewCardComponent {
  @Input({ required: true }) review!: Review;

  getStars(rating: number): number[] {
    return Array.from({ length: rating }, (_, i) => i);
  }
}
