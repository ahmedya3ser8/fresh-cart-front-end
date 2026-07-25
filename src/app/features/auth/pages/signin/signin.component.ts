import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroClockSolid, heroShieldCheckSolid, heroTruckSolid } from '@ng-icons/heroicons/solid';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  imports: [NgIconComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  providers: [
    provideIcons({
      heroClockSolid,
      heroTruckSolid,
      heroShieldCheckSolid
    })
  ]
})
export class SigninComponent implements OnInit {
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
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    })
  }

  submitForm(): void {
    if (this.form.valid) {
      this.isLoading = true;
      console.log(this.form.value);
      this.authService.signin(this.form.value).subscribe({
        next: (res) => {
          console.log(res);
          if (res.message === 'success') {
            this.router.navigateByUrl('/home').then(success => {
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
