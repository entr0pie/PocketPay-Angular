import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: '', redirectTo: 'client', pathMatch: 'full' },
 { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
 { path: 'seller', loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
