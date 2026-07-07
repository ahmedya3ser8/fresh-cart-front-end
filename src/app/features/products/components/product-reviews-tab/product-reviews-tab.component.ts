import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product, Review } from '../../models';
import { ReviewCardComponent } from '../review-card/review-card.component';
import { RatingSummaryComponent } from '../rating-summary/rating-summary.component';
import { RatingDistributionComponent } from '../rating-distribution/rating-distribution.component';

@Component({
  selector: 'app-product-reviews-tab',
  imports: [ReviewCardComponent, RatingSummaryComponent, RatingDistributionComponent],
  templateUrl: './product-reviews-tab.component.html',
  styleUrl: './product-reviews-tab.component.css',
})
export class ProductReviewsTabComponent {
  @Input({ required: true }) product!: Product;
  @Input({ required: true }) reviews: Review[] = [];

  @Output() onSubmit = new EventEmitter();

  get ratingCounts(): Record<number, number> {
    return this.reviews.reduce((acc, review) => {
        acc[review.rating]++;
        return acc;
      },
      { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 } as Record<number, number>
    );
  }

  get ratingPercentages(): Record<number, number> {
    const total = this.reviews.length || 1;
    return {
      1: (this.ratingCounts[1] / total) * 100,
      2: (this.ratingCounts[2] / total) * 100,
      3: (this.ratingCounts[3] / total) * 100,
      4: (this.ratingCounts[4] / total) * 100,
      5: (this.ratingCounts[5] / total) * 100,
    };
  }
}
