import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerLoginPageComponent } from './seller-login-page/seller-login-page.component';
import { SellerRegisterPageComponent } from './seller-register-page/seller-register-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: SellerLoginPageComponent },
  { path: 'register', component: SellerRegisterPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerAuthRoutingModule { }
