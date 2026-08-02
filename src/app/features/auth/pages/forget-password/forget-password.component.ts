import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroEnvelopeSolid, heroKeySolid, heroLockClosedSolid, heroShieldCheckSolid, heroTruckSolid } from '@ng-icons/heroicons/solid';
import { AuthService } from '../../services';
import { passwordMatchValidator } from '../../../../shared';

@Component({
  selector: 'app-forget-password',
  imports: [RouterLink, NgIconComponent, ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css',
  providers: [
    provideIcons({
      heroTruckSolid,
      heroShieldCheckSolid,
      heroLockClosedSolid,
      heroEnvelopeSolid,
      heroKeySolid
    })
  ]
})
export class ForgetPasswordComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  forgetform!: FormGroup;
  verifyform!: FormGroup;
  resetform!: FormGroup;
  isLoading = false;
  steps: 'forgot' | 'verify' | 'reset' = 'forgot';

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.forgetform = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
    })
    this.verifyform = this.fb.group({
      resetCode: [null, [Validators.required]],
    })
    this.resetform = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      newPassword: [null, [Validators.required, Validators.minLength(8)]],
      confirmNewPassword: [null, [Validators.required]],
    }, { validators: passwordMatchValidator('newPassword', 'confirmNewPassword') })
  }

  submitForgetForm(): void {
    if (this.forgetform.valid) {
      this.isLoading = true;
      console.log(this.forgetform.value);
      this.authService.forgotPassword(this.forgetform.value).subscribe({
        next: (res) => {
          console.log(res);
          this.steps = 'verify';
          this.isLoading = false;
        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;
        }
      })
    } else {
      this.forgetform.markAllAsTouched();
    }
  }

  submitVerifyForm(): void {
    if (this.verifyform.valid) {
      this.isLoading = true;
      console.log(this.verifyform.value);
      this.resetform.patchValue({ email: this.forgetform.value.email });
      this.authService.verifyResetCode(this.verifyform.value).subscribe({
        next: (res) => {
          console.log(res);
          this.steps = 'reset';
          this.isLoading = false;
        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;
        }
      })
    } else {
      this.verifyform.markAllAsTouched();
    }
  }

  submitResetForm(): void {
    if (this.resetform.valid) {
      this.isLoading = true;
      console.log(this.resetform.value);
      this.authService.resetPassword(this.resetform.value).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigateByUrl('/auth/signin');
          this.isLoading = false;
        },
        error: (err) => {
          console.log(err);
          this.isLoading = false;
        }
      })
    } else {
      this.resetform.markAllAsTouched();
    }
  }
}
