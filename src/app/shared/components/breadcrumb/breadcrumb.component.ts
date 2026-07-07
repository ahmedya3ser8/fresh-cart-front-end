import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Breadcrumb } from '../../../core';

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent {
  @Input({ required: true }) breadcrumbs!: Breadcrumb[];
  @Input() color!: string;
  @Input() symbol!: string;
}
