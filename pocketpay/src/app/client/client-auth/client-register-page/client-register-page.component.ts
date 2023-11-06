import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/v1/auth/auth.service';

@Component({
  selector: 'app-client-register-page',
  templateUrl: './client-register-page.component.html',
  styleUrls: ['./client-register-page.component.scss']
})
export class ClientRegisterPageComponent {

  constructor(
    private title: Title,
    private router: Router,
    private authService: AuthService
  ) {
    try {
      const jwt = this.authService.jwt;
      this.router.navigateByUrl('/client/dashboard');
    } catch (error) {}

    this.title.setTitle('Create a Personal Account | PocketPay');
  } 

}
