import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouteReuseStrategy, Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/v1/auth/auth.service';

@Component({
  selector: 'app-client-login-page',
  templateUrl: './client-login-page.component.html',
  styleUrls: ['./client-login-page.component.scss']
})
export class ClientLoginPageComponent {

  constructor(
    private title: Title,
    private router: Router,
    private authService: AuthService
  ) {
    try {
      const jwt = this.authService.jwt;
      this.router.navigateByUrl('/client/dashboard');
    } catch (error) {}

    this.title.setTitle('Login into your Personal Account | PocketPay')
  }
}
