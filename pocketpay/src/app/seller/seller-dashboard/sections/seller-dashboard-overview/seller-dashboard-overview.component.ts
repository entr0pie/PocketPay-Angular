import { TransactionService } from './../../../../services/api/v1/transaction/transaction.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/api/v1/auth/auth.service';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seller-dashboard-overview',
  templateUrl: './seller-dashboard-overview.component.html',
  styleUrls: ['./seller-dashboard-overview.component.scss']
})
export class SellerDashboardOverviewComponent {
  public transactions$!: Observable<any>;

  private access_token!:string;

  public overview$!: Observable<any>;
  public displayedColumns: String[] = ['id', 'timestamp', 'type'];

  constructor(
    private router: Router,
    private authService: AuthService,
    private transactionservice: TransactionService,
    private DatePipe: DatePipe,
    private dialog: MatDialog
  ){
    this.access_token = authService.jwt;
    this.overview$ = this.transactionservice.getAllTransactions(this.access_token);
  }

  public formatDate(date: string) {
    return this.DatePipe.transform(date, 'dd/MM/yyyy HH:mm:ss');
  }

  public mapTransactionType(type: number): string {
    switch (type) {
      case 0:
        return 'Transference';
      case 1:
        return 'Withdraw';
      case 2:
        return 'Deposit';
      default:
        return 'Unknown';
    }
  }

}
