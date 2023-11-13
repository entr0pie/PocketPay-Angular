import { WalletService } from './../../../services/api/v1/wallet/wallet.service';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/api/v1/auth/auth.service';
import { GetBalanceResponse } from 'src/app/services/api/v1/wallet/interfaces/getbalance-response';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProfileService } from 'src/app/services/api/v1/profile/profile.service';

@Component({
  selector: 'app-client-dashboard-page',
  templateUrl: './client-dashboard-page.component.html',
  styleUrls: ['./client-dashboard-page.component.scss'],
})
export class ClientDashboardPageComponent {

  public balance$!: Observable<GetBalanceResponse>;
  public profile$!: Observable<any>;

  constructor(
    private title: Title,
    private authService: AuthService,
    private router: Router,
    private walletService: WalletService,
    private profileService: ProfileService
  ) {
    this.getJWT();
    this.title.setTitle("Dashboard | PocketPay");

    this.balance$ = this.getBalance();
    this.profile$ = this.getProfile();
  }

  private getJWT() {
    let jwt = '';

    try {
      jwt = this.authService.jwt;
    } catch (error) {
      this.router.navigateByUrl('/client/auth/login');
    }

    return jwt;
  }

  private getBalance() {
    const jwt = this.getJWT();
    return this.walletService.getBalance(jwt);
  }

  private getProfile() {
    const jwt = this.getJWT();
    return this.profileService.getProfile(jwt);
  }

  showBalance = true;

  toggleBalance() {
    this.showBalance = this.showBalance!
  }


}
