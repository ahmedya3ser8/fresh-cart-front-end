import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  imports: [],
  templateUrl: './section-heading.component.html',
  styleUrl: './section-heading.component.css'
})
export class SectionHeadingComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) subTitle!: string;
}
