import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroUserPlus, heroTruck, heroShieldCheck } from '@ng-icons/heroicons/outline';
import { heroShieldCheckSolid, heroStarSolid, heroTruckSolid } from '@ng-icons/heroicons/solid';
import { passwordMatchValidator } from '../../../../shared';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, NgIcon, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  providers: [
    provideIcons({
      heroUserPlus,
      heroStarSolid,
      heroTruckSolid,
      heroShieldCheckSolid
    })
  ]
})
export class SignupComponent implements OnInit {
  featuresList = [
    {
      id: 1,
      icon: 'heroStarSolid',
      title: 'Premium Quality',
      description: 'Premium quality products sourced from trusted suppliers'
    },
    {
      id: 2,
      icon: 'heroTruckSolid',
      title: 'Fast Delivery',
      description: 'Same-day delivery available in most areas'
    },
    {
      id: 3,
      icon: 'heroShieldCheckSolid',
      title: 'Secure Shopping',
      description: 'Your data and payments are completely secure'
    },
  ];

  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  form!: FormGroup;
  isLoading = false;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      rePassword: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]]
    }, { validators: passwordMatchValidator('password', 'rePassword') })
  }

  submitForm(): void {
    if (this.form.valid) {
      this.isLoading = true;
      console.log(this.form.value);
      this.authService.signup(this.form.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.message === 'success') {
            // this.router.navigate(['/auth/signin']);
            this.router.navigateByUrl('/auth/signin').then(success => {
              console.log('Navigation success:', success);
            }).catch(err => {
              console.error('Navigation error:', err);
            });
            this.isLoading = false;
          }
        },
        error: (err) => {
          console.log(err.error.message);
          this.isLoading = false;
        }
      })
    } else {
      this.form.markAllAsTouched();
    }
  }
}
