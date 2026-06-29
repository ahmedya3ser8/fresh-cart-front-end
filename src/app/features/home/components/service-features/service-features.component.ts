import { Component } from '@angular/core';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroArrowUturnLeftSolid, heroChatBubbleLeftRightSolid, heroShieldCheckSolid, heroTruckSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-service-features',
  imports: [NgIconComponent],
  templateUrl: './service-features.component.html',
  styleUrl: './service-features.component.css',
  providers: [
    provideIcons({
      heroTruckSolid,
      heroShieldCheckSolid,
      heroArrowUturnLeftSolid,
      heroChatBubbleLeftRightSolid
    })
  ]
})
export class ServiceFeaturesComponent {
  serviceFeatureList = [
    { id: 1, title: 'Free Shipping', description: 'On orders over 500 EGP', colors: 'bg-blue-50 text-blue-500', icon: 'heroTruckSolid' },
    { id: 2, title: 'Secure Payment', description: '100% secure transactions', colors: 'bg-green-50 text-green-500', icon: 'heroShieldCheckSolid' },
    { id: 3, title: 'Easy Returns', description: '14-day return policy', colors: 'bg-orange-50 text-orange-500', icon: 'heroArrowUturnLeftSolid' },
    { id: 4, title: '24/7 Support', description: 'Dedicated support team', colors: 'bg-purple-50 text-purple-500', icon: 'heroChatBubbleLeftRightSolid' },
  ];
}
