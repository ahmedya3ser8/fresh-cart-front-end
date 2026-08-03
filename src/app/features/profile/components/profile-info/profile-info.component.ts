import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroLockClosedSolid, heroUserSolid } from '@ng-icons/heroicons/solid';

import { API_ENDPOINTS } from '../../../../constants';
import { AuthService } from '../../../auth';

@Component({
  selector: 'app-profile-info',
  imports: [NgIconComponent, ReactiveFormsModule],
  templateUrl: './profile-info.component.html',
  styleUrl: './profile-info.component.css',
  providers: [
    provideIcons({
      heroUserSolid,
      heroLockClosedSolid
    })
  ]
})
export class ProfileInfoComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);

  form!: FormGroup;
  userInfo = this.authService.getUserInfoFromToken();

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]]
    })
  }

  submitForm(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.authService.updateLoggedUserData(this.form.value).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }
}
