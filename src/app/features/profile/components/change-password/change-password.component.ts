import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroLockClosedSolid } from '@ng-icons/heroicons/solid';

import { passwordMatchValidator } from '../../../../shared';
import { AuthService } from '../../../auth';
import { API_ENDPOINTS } from '../../../../constants';

@Component({
  selector: 'app-change-password',
  imports: [NgIconComponent, ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
  providers: [
    provideIcons({
      heroLockClosedSolid
    })
  ]
})
export class ChangePasswordComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);

  form!: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      currentPassword: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      rePassword: [null, [Validators.required]]
    }, { validators: passwordMatchValidator('password', 'rePassword') })
  }

  submitForm(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.authService.updateLoggedUserPassword(API_ENDPOINTS.USER.BASE + '/changeMyPassword', this.form.value).subscribe({
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
