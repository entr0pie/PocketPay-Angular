import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerAuthRoutingModule } from './seller-auth-routing.module';
import { SellerLoginPageComponent } from './seller-login-page/seller-login-page.component';
import { SellerRegisterPageComponent } from './seller-register-page/seller-register-page.component';
import { SellerRegisterSectionComponent } from './seller-register-page/seller-register-section/seller-register-section.component';
import { SellerLoginSectionComponent } from './seller-login-page/seller-login-section/seller-login-section.component';


@NgModule({
  declarations: [
    SellerLoginPageComponent,
    SellerRegisterPageComponent,
    SellerRegisterSectionComponent,
    SellerLoginSectionComponent
  ],
  imports: [
    CommonModule,
    SellerAuthRoutingModule
  ]
})
export class SellerAuthModule { }
