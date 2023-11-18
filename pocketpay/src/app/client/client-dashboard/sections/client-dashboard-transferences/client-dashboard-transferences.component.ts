import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/api/v1/auth/auth.service';
import { GetAllTransferencesResponse } from 'src/app/services/api/v1/transference/interfaces/get-all-transferences-response';
import { TransferenceService } from 'src/app/services/api/v1/transference/transference.service';
import { ClientTransferenceDialogComponent } from './client-transference-dialog/client-transference-dialog.component';

@Component({
  selector: 'app-client-dashboard-transferences',
  templateUrl: './client-dashboard-transferences.component.html',
  styleUrls: ['./client-dashboard-transferences.component.scss']
})
export class ClientDashboardTransferencesComponent {

  public transferences$!: Observable<any>;
  public displayedColumns: String[] = ['timestamp', 'receiver', 'value'];

  constructor(
    private router: Router,
    private authService: AuthService,
    private transferenceService: TransferenceService,
    private dialog: MatDialog
  ) {
    try {
      const access_token = this.authService.jwt;
      this.transferences$ = this.transferenceService.getTransferences(access_token);
    } catch (e) {
      router.navigateByUrl('/client/auth/login');
    }
  }

  public openTransferenceDialog(): void {
    let dialog = this.dialog.open(ClientTransferenceDialogComponent, {width: '500px'});

  }

}
