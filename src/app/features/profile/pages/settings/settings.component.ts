import { Component } from '@angular/core';

import { BreadcrumbComponent, PageHeaderComponent } from "../../../../shared";
import { ProfileInfoComponent, ChangePasswordComponent } from "../../components";

import { provideIcons } from '@ng-icons/core';
import { heroUserSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-settings',
  imports: [PageHeaderComponent, BreadcrumbComponent, ProfileInfoComponent, ChangePasswordComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
  providers: [
    provideIcons({
      heroUserSolid
    })
  ]
})
export class SettingsComponent {
  breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'My Account' },
  ];
}
