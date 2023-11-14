import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./seller-auth/seller-auth.module').then(m => m.SellerAuthModule) },
  { path: 'dashboard', loadChildren: () => import('./seller-dashboard/seller-dashboard.module').then(m => m.SellerDashboardModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
