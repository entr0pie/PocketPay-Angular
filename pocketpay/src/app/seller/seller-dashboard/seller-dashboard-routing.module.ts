import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerDashboardPageComponent } from './seller-dashboard-page/seller-dashboard-page.component';

const routes: Routes = [
  { path: '', component: SellerDashboardPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerDashboardRoutingModule { }
