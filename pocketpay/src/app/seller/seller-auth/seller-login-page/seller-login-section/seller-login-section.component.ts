import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/v1/auth/auth.service';
import { SellerService } from 'src/app/services/api/v1/seller/seller.service';

@Component({
  selector: 'app-seller-login-section',
  templateUrl: './seller-login-section.component.html',
  styleUrls: ['./seller-login-section.component.scss']
})
export class SellerLoginSectionComponent {
  loginForm = this.form.group({
    email: new FormControl('', [Validators.required, Validators.nullValidator, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.nullValidator])
  });

  constructor(
    private sellerService: SellerService,
    private authService: AuthService,
    private form: FormBuilder,
    private router: Router
  ) {}

  sendLoginRequest() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    if (!this.loginForm.valid || email == null || password == null) return;

    this.sellerService.login(email, password)
    .subscribe({
      next: (response) => {
        this.authService.jwt = response.access_token;
        this.router.navigateByUrl('/seller/dashboard');
      },
      error: (error: any) => {
        if (error.status == 401) {
          alert('Invalid email or password');
        }
      }
    });
  }

}
