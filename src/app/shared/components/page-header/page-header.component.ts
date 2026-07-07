import { Component, Input } from '@angular/core';

import { NgIconComponent } from "@ng-icons/core";

@Component({
  selector: 'app-page-header',
  imports: [NgIconComponent],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css'
})
export class PageHeaderComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) gradiant!: string;
}
