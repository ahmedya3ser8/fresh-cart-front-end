import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { heroXMark } from '@ng-icons/heroicons/outline';
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroPencilSolid, heroStarSolid } from '@ng-icons/heroicons/solid';

import { ReviewService } from '../../services';

@Component({
  selector: 'app-rating-summary',
  imports: [NgIconComponent, FormsModule],
  templateUrl: './rating-summary.component.html',
  styleUrl: './rating-summary.component.css',
  providers: [
    provideIcons({
      heroPencilSolid,
      heroStarSolid,
      heroXMark,
    })
  ]
})
export class RatingSummaryComponent {
  private readonly reviewService = inject(ReviewService);

  @Input({ required: true }) ratingsAverage!: number;
  @Input({ required: true }) reviewsCount!: number;
  @Input({ required: true }) productId!: string;

  @Output() onSubmit = new EventEmitter();

  selectedRating: number = 0;
  hoverRating: number = 0;
  isOpen: boolean = false;
  review!: string;

  readonly ratingLabels: Record<number, string> = {
    1: 'Poor',
    2: 'Fair',
    3: 'Good',
    4: 'Very Good',
    5: 'Excellent'
  };

  setRating(rating: number): void {
    this.selectedRating = rating;
  }

  onMouseEnter(rating: number): void {
    this.hoverRating = rating;
  }

  onMouseLeave(): void {
    this.hoverRating = 0;
  }

  get currentLabel(): string {
    const rating = this.hoverRating || this.selectedRating;
    return this.ratingLabels[rating] ?? '';
  }

  submitForm(): void {
    if (this.selectedRating && this.review) {
      this.reviewService.createReviewForProduct(this.productId, { review: this.review, rating: this.selectedRating }).subscribe({
        next: (res) => {
          console.log(res);
          this.onSubmit.emit();
          this.close();
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
  }

  close(): void {
    this.isOpen = false;
    this.selectedRating = 0;
    this.review = '';
  }
}
