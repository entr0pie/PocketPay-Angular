import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLoginPageComponent } from './client-login-page/client-login-page.component';
import { ClientRegisterPageComponent } from './client-register-page/client-register-page.component';

const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },
 { path: 'login', component: ClientLoginPageComponent },
 { path: 'register', component: ClientRegisterPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientAuthRoutingModule { }
