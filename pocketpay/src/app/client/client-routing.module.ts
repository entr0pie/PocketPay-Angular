import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./client-auth/client-auth.module').then(m => m.ClientAuthModule)},
  { path: 'dashboard', loadChildren: () => import('./client-dashboard/client-dashboard.module').then(m => m.ClientDashboardModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
