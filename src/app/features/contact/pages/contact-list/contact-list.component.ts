import { Component } from '@angular/core';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroChatBubbleLeftRightSolid, heroClockSolid, heroEnvelopeSolid, heroMapPinSolid, heroPhoneSolid } from '@ng-icons/heroicons/solid';

import { BreadcrumbComponent, PageHeaderComponent } from "../../../../shared";

@Component({
  selector: 'app-contact-list',
  imports: [PageHeaderComponent, BreadcrumbComponent, NgIconComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
  providers: [
    provideIcons({
      heroChatBubbleLeftRightSolid,
      heroPhoneSolid,
      heroEnvelopeSolid,
      heroMapPinSolid,
      heroClockSolid
    })
  ]
})
export class ContactListComponent {
  breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'Contact Us' },
  ];

  contacts = [
    {
      id: 1,
      icon: 'heroPhoneSolid',
      title: 'Phone',
      description: 'Mon-Fri from 8am to 6pm',
      link: 'tel:+18001234567',
      text: '+1 (800) 123-4567'
    },
    {
      id: 2,
      icon: 'heroEnvelopeSolid',
      title: 'Email',
      description: 'We‘ll respond within 24 hours',
      link: 'mailto:support@freshcart.com',
      text: 'support@freshcart.com'
    },
    {
      id: 3,
      icon: 'heroMapPinSolid',
      title: 'Office',
      description: '123 Commerce Street <br/> New York, NY 10001 <br/> United States'
    },
    {
      id: 4,
      icon: 'heroClockSolid',
      title: 'Business Hours',
      description: 'Monday - Friday: 8am - 6pm <br/> Saturday: 9am - 4pm <br/> Sunday: Closed',
    },
  ]
}
