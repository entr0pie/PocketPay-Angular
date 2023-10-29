import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientAuthRoutingModule } from './client-auth-routing.module';
import { ClientLoginPageComponent } from './client-login-page/client-login-page.component';
import { ClientRegisterPageComponent } from './client-register-page/client-register-page.component';
import { ClientLoginSectionComponent } from './client-login-page/client-login-section/client-login-section.component';
import { ClientRegisterSectionComponent } from './client-register-page/client-register-section/client-register-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';


@NgModule({
  declarations: [
    ClientLoginPageComponent,
    ClientRegisterPageComponent,
    ClientLoginSectionComponent,
    ClientRegisterSectionComponent,
  ],
  imports: [
    CommonModule,
    ClientAuthRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideEnvironmentNgxMask(),
  ]
})
export class ClientAuthModule { }
