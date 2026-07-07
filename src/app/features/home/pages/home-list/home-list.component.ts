import { Component } from '@angular/core';

import {
  HeroComponent,
  CategoryCarouselComponent,
  DealBannerComponent,
  FeaturedProductsComponent,
  ServiceFeaturesComponent
} from '../../components';

@Component({
  selector: 'app-home-list',
  imports: [HeroComponent, ServiceFeaturesComponent, CategoryCarouselComponent, DealBannerComponent, FeaturedProductsComponent],
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.css',
})
export class HomeListComponent  {

}
