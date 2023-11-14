import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellerAuthRoutingModule } from './seller-auth-routing.module';
import { SellerLoginPageComponent } from './seller-login-page/seller-login-page.component';
import { SellerRegisterPageComponent } from './seller-register-page/seller-register-page.component';
import { SellerRegisterSectionComponent } from './seller-register-page/seller-register-section/seller-register-section.component';
import { SellerLoginSectionComponent } from './seller-login-page/seller-login-section/seller-login-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SellerLoginPageComponent,
    SellerRegisterPageComponent,
    SellerRegisterSectionComponent,
    SellerLoginSectionComponent
  ],
  imports: [
    CommonModule,
    SellerAuthRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    provideEnvironmentNgxMask(),
  ]
})
export class SellerAuthModule { }
