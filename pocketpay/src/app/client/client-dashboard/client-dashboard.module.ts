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


@NgModule({
  declarations: [
    ClientDashboardPageComponent,
    GreetingsPipe,
    BalancePipe,
    ClientDashboardOverviewComponent,
    ClientDashboardTransferencesComponent,
    ClientDashboardDepositsComponent,
    ClientDashboardWithdrawsComponent
  ],
  imports: [
    CommonModule,
    ClientDashboardRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule
  ],
  bootstrap: [MatToolbarModule],
  providers: []
})
export class ClientDashboardModule { }
