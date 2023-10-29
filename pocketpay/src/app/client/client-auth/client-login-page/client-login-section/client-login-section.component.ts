import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/v1/auth/auth.service';
import { ClientService } from 'src/app/services/api/v1/client/client.service';
import { ClientLoginResponse } from 'src/app/services/api/v1/client/interfaces/client-login-response';

@Component({
  selector: 'app-client-login-section',
  templateUrl: './client-login-section.component.html',
  styleUrls: ['./client-login-section.component.scss']
})
export class ClientLoginSectionComponent {

  loginForm = this.form.group({
    email: new FormControl('', [Validators.required, Validators.nullValidator, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.nullValidator])
  });

  constructor(
    private clientService: ClientService,
    private authService: AuthService,
    private form: FormBuilder,
    private router: Router
  ) {}

  sendLoginRequest() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    if (!this.loginForm.valid || email == null || password == null) return;

    this.clientService.login(email, password)
    .subscribe({
      next: (response: ClientLoginResponse) => {
        this.authService.jwt = response.access_token;
        this.router.navigateByUrl('/client/dashboard');
      },
      error: (error: any) => {
        if (error.status == 401) {
          alert('Invalid email or password');
        }
      }
    });
  }

}
