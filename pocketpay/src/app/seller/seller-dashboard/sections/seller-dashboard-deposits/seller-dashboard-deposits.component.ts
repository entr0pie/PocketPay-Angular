import { Observable } from 'rxjs';
import { DepositService } from './../../../../services/api/v1/deposit/deposit.service';
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { Deposit } from 'src/app/services/api/v1/deposit/interfaces/getdeposits-response';
import { AuthService } from 'src/app/services/api/v1/auth/auth.service';
import { DepositDialogComponent } from './deposit-dialog/deposit-dialog.component';

@Component({
  selector: 'app-seller-dashboard-deposits',
  templateUrl: './seller-dashboard-deposits.component.html',
  styleUrls: ['./seller-dashboard-deposits.component.scss']
})
export class SellerDashboardDepositsComponent {
  private access_token!: string;
  public displayedColumns: string[] = ['idDeposit', 'timestamp', 'value']
  public Deposit!: Observable<any>;

  constructor(
    private dialog: MatDialog,
    private DepositService: DepositService,
    private AuthService: AuthService,
    private Router: Router,
    private DatePipe: DatePipe
  ) {
    try {
      this.access_token = this.AuthService.jwt;
      this.Deposit = this.DepositService.getDeposits(this.access_token);
    } catch (e) {
      Router.navigateByUrl('/cleint/auth/logn');
    }
  }

  public formatDate(date: string) {
    return this.DatePipe.transform(date, 'dd/MM/yyyy HH:mm:ss');
  }

  public OpenDepositDialog(): void {
    let Dialog = this.dialog.open(DepositDialogComponent, {width: '500px'});
  }
}
