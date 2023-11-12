import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WithdrawsDialogComponent } from './withdraws-dialog/withdraws-dialog.component';
import { WithdrawService } from '../../../../services/api/v1/withdraw/withdraw.service';
import { AuthService } from '../../../../services/api/v1/auth/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-dashboard-withdraws',
  templateUrl: './client-dashboard-withdraws.component.html',
  styleUrls: ['./client-dashboard-withdraws.component.scss']
})
export class ClientDashboardWithdrawsComponent {

  private access_token!: string;
  public displayedColumns: string[] = ['idTransaction', 'timestamp', 'value']
  public Withdraws!: Observable<any>;

  constructor(
    private dialog: MatDialog,
    private WithdrawService: WithdrawService,
    private AuthService: AuthService,
    private Router: Router,
    private DatePipe: DatePipe
  ) {
    try{
      this.access_token = this.AuthService.jwt;
      this.Withdraws = this.WithdrawService.getWithdraws(this.access_token);
    } catch (e) {
      Router.navigateByUrl('/client/auth/login');
    }

  }

  public formatDate(date: string) {
    return this.DatePipe.transform(date, 'dd/MM/yyyy HH:mm:ss');
  }


  public OpenWithdrawDialog(): void {
    let Dialog = this.dialog.open(WithdrawsDialogComponent, {width: '500px'});

  }


}
