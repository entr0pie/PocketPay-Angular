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
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-dashboard-deposits',
  templateUrl: './client-dashboard-deposits.component.html',
  styleUrls: ['./client-dashboard-deposits.component.scss']
})
export class ClientDashboardDepositsComponent {

  private access_token!: string;
  public displayedColumns: string[] = ['idDeposit', 'timestamp', 'value']
  public Deposit!: Observable<any>;

  constructor(
    private dialog: MatDialog,
    private DepositService: DepositService,
    private AuthService: AuthService,
    private Router: Router,
    private DatePipe: DatePipe,
    private snackBar: MatSnackBar,
    private location: Location
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
    Dialog.afterClosed().subscribe(result => {
      let snackBarRef = this.snackBar.open('Depósito realizado com sucesso!', 'Fechar', {duration: 3000});
    })
  }
}
