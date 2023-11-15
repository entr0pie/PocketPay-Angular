import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/api/v1/auth/auth.service';
import { TransferenceService } from 'src/app/services/api/v1/transference/transference.service';
import { TransferenceDialogComponent } from './transference-dialog/transference-dialog.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-seller-dashboard-transferences',
  templateUrl: './seller-dashboard-transferences.component.html',
  styleUrls: ['./seller-dashboard-transferences.component.scss']
})
export class SellerDashboardTransferencesComponent {
  [x: string]: any;

  public transferences$!: Observable<any>;
  public displayedColumns: String[] = ['timestamp', 'receiver', 'value'];

  constructor(
    private router: Router,
    private authService: AuthService,
    private transferenceService: TransferenceService,
    private dialog: MatDialog,
    private DatePipe: DatePipe
  ) {
    try {

      const access_token = this.authService.jwt;
      this.transferences$ = this.transferenceService.getTransferences(access_token);

    } catch (e) {
      router.navigateByUrl('/seller/auth/login');
    }
  }

  public formatDate(date: string) {
    return this.DatePipe.transform(date, 'dd/MM/yyyy HH:mm:ss');
  }

  public openTransferenceDialog(): void {
    let dialog = this.dialog.open(TransferenceDialogComponent, {width: '500px'});

  }

}
