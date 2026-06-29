import { Component } from '@angular/core';

import { HeroComponent } from "../../components/hero/hero.component";
import { ServiceFeaturesComponent } from "../../components/service-features/service-features.component";
import { CategoryCarouselComponent } from "../../components/category-carousel/category-carousel.component";
import { DealBannerComponent } from "../../components/deal-banner/deal-banner.component";
import { FeaturedProductsComponent } from "../../components/featured-products/featured-products.component";

@Component({
  selector: 'app-home-list',
  imports: [HeroComponent, ServiceFeaturesComponent, CategoryCarouselComponent, DealBannerComponent, FeaturedProductsComponent],
  templateUrl: './home-list.component.html',
  styleUrl: './home-list.component.css',
})
export class HomeListComponent  {

}
