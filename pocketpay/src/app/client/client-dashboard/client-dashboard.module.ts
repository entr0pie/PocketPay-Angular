import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientDashboardRoutingModule } from './client-dashboard-routing.module';
import { ClientDashboardPageComponent } from './client-dashboard-page/client-dashboard-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GreetingsPipe } from './pipes/greetings/greetings.pipe';
import { BalancePipe } from './pipes/balance/balance.pipe';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    ClientDashboardPageComponent,
    GreetingsPipe,
    BalancePipe
  ],
  imports: [
    CommonModule,
    ClientDashboardRoutingModule,
    MatToolbarModule,
    MatCardModule
  ],
  bootstrap: [MatToolbarModule],
  providers: []
})
export class ClientDashboardModule { }
