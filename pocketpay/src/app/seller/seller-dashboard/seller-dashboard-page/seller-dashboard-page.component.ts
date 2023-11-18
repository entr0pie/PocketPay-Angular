import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBalanceResponse } from 'src/app/services/api/v1/wallet/interfaces/getbalance-response';
import { WalletService } from '../../../services/api/v1/wallet/wallet.service';
import { AuthService } from '../../../services/api/v1/auth/auth.service';
import { Router } from '@angular/router';
import { ProfileService } from '../../../services/api/v1/profile/profile.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-seller-dashboard-page',
  templateUrl: './seller-dashboard-page.component.html',
  styleUrls: ['./seller-dashboard-page.component.scss']
})
export class SellerDashboardPageComponent {

  public balance$!: Observable<GetBalanceResponse>;
  public profile$!: Observable<any>;

  constructor(
    private WalletService: WalletService,
    private AuthService: AuthService,
    private Router: Router,
    private ProfileService: ProfileService,
    private Title: Title
  ) {
    this.getJWT();
    this.balance$ = this.getBalance();
    this.profile$ = this.getProfile();
  }

  private getJWT() {
    let jwt = '';
    try{
      jwt = this.AuthService.jwt;
    } catch (e) {
      this.Router.navigateByUrl('/saller/auth/login');
    }

    return jwt;
  }

  private getBalance() {
    const jwt = this.getJWT();
    return this.WalletService.getBalance(jwt);
  }

  private getProfile() {
    const jwt = this.getJWT();
    return this.ProfileService.getProfile(jwt);
  }

  public logout() {
    this.AuthService.logout();
    this.Router.navigateByUrl('/seller/auth/login');
  }


}
