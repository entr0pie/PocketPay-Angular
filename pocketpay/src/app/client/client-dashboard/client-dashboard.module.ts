import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientDashboardRoutingModule } from './client-dashboard-routing.module';
import { ClientDashboardPageComponent } from './client-dashboard-page/client-dashboard-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GreetingsPipe } from './pipes/greetings/greetings.pipe';
import { BalancePipe } from './pipes/balance/balance.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { ClientDashboardOverviewComponent } from './sections/client-dashboard-overview/client-dashboard-overview.component';
import { ClientDashboardTransferencesComponent } from './sections/client-dashboard-transferences/client-dashboard-transferences.component';
import { ClientDashboardDepositsComponent } from './sections/client-dashboard-deposits/client-dashboard-deposits.component';
import { ClientDashboardWithdrawsComponent } from './sections/client-dashboard-withdraws/client-dashboard-withdraws.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ClientTransferenceDialogComponent } from './sections/client-dashboard-transferences/client-transference-dialog/client-transference-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { WithdrawsDialogComponent } from './sections/client-dashboard-withdraws/withdraws-dialog/withdraws-dialog.component';
import { DatePipe } from '@angular/common';
import { DepositDialogComponent } from './sections/client-dashboard-deposits/deposit-dialog/deposit-dialog.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 

@NgModule({
  declarations: [
    ClientDashboardPageComponent,
    GreetingsPipe,
    BalancePipe,
    ClientDashboardOverviewComponent,
    ClientDashboardTransferencesComponent,
    ClientDashboardDepositsComponent,
    ClientDashboardWithdrawsComponent,
    ClientTransferenceDialogComponent,
    WithdrawsDialogComponent,
    DepositDialogComponent,

  ],
  imports: [
    CommonModule,
    ClientDashboardRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSnackBarModule
  ],
  bootstrap: [MatToolbarModule],
  providers: [DatePipe],

})
export class ClientDashboardModule { }
