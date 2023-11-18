import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SellerDashboardRoutingModule } from './seller-dashboard-routing.module';
import { GreetingsPipe } from './pipes/greetings/greetings.pipe';
import { BalancePipe } from './pipes/balance/balance.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SellerDashboardPageComponent } from './seller-dashboard-page/seller-dashboard-page.component';
import { SellerDashboardOverviewComponent } from './sections/seller-dashboard-overview/seller-dashboard-overview.component';
import { SellerDashboardTransferencesComponent } from './sections/seller-dashboard-transferences/seller-dashboard-transferences.component';
import { SellerDashboardDepositsComponent } from './sections/seller-dashboard-deposits/seller-dashboard-deposits.component';
import { SellerDashboardWithdrawsComponent } from './sections/seller-dashboard-withdraws/seller-dashboard-withdraws.component';
import { TransferenceDialogComponent } from './sections/seller-dashboard-transferences/transference-dialog/transference-dialog.component';
import { MatMenu, MatMenuModule } from '@angular/material/menu'; 
import { DepositDialogComponent } from './sections/seller-dashboard-deposits/deposit-dialog/deposit-dialog.component';
import { WithdrawsDialogComponent } from './sections/seller-dashboard-withdraws/withdraws-dialog/withdraws-dialog.component';



@NgModule({
  declarations: [
    GreetingsPipe,
    BalancePipe,
    SellerDashboardPageComponent,
    SellerDashboardOverviewComponent,
    SellerDashboardTransferencesComponent,
    SellerDashboardDepositsComponent,
    SellerDashboardWithdrawsComponent,
    TransferenceDialogComponent,
    DepositDialogComponent,
    WithdrawsDialogComponent
  ],
  imports: [
    CommonModule,
    SellerDashboardRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  bootstrap: [MatToolbarModule],
  providers: [DatePipe]
})
export class SellerDashboardModule { }

