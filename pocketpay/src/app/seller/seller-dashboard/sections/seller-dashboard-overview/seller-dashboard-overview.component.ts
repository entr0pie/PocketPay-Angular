import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/api/v1/auth/auth.service';
import { TransactionService } from 'src/app/services/api/v1/transaction/transaction.service';

@Component({
  selector: 'app-seller-dashboard-overview',
  templateUrl: './seller-dashboard-overview.component.html',
  styleUrls: ['./seller-dashboard-overview.component.scss']
})
export class SellerDashboardOverviewComponent {
  public transactions$!: Observable<any>;
  public displayedColumns: String[] = ['timestamp', 'type'];

  constructor(
    private router: Router,
    private authService: AuthService,
    private transactionService: TransactionService,
    private dialog: MatDialog
  ) {
    try {
      const access_token = this.authService.jwt;
      this.transactions$ = this.transactionService.getAllTransactions(access_token);
    } catch (e) {
      router.navigateByUrl('/client/auth/login');
    }
  }
}
