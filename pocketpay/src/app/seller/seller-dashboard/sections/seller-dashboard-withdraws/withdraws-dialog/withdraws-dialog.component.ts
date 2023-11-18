import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WalletService } from '../../../../../services/api/v1/wallet/wallet.service';
import { AuthService } from '../../../../../services/api/v1/auth/auth.service';
import { Router } from '@angular/router';
import { GetBalanceResponse } from '../../../../../services/api/v1/wallet/interfaces/getbalance-response';
import { WithdrawResponse } from '../../../../../services/api/v1/withdraw/interfaces/get-all-withdraws-response';
import { WithdrawService } from '../../../../../services/api/v1/withdraw/withdraw.service';
import { CreateWithdrawResponse } from '../../../../../services/api/v1/withdraw/interfaces/create-withdraw-response';


@Component({
  selector: 'app-withdraws-dialog',
  templateUrl: './withdraws-dialog.component.html',
  styleUrls: ['./withdraws-dialog.component.scss']

})
export class WithdrawsDialogComponent {

  public WithdrawForm: FormGroup = new FormGroup ({
    value: new FormControl('', [Validators.required, Validators.min(0.1)])
  });

  public get value() {
    return  this.WithdrawForm.get('value') as FormControl;
  }

  private access_token!: string;

  constructor(
    public dialogRef: MatDialogRef<WithdrawsDialogComponent>,
    private form: FormBuilder,
    private WalletService: WalletService,
    private AuthService: AuthService,
    private Router: Router,
    private WithdrawService: WithdrawService
  ) {
    try {
      this.access_token = AuthService.jwt;
    } catch (e) {
      Router.navigateByUrl('/seller/auth/login');
    }
  }

  public cancelWithdraw() {
    this.dialogRef.close();
  }

  public sendWithdraw() {
    if(!this.WithdrawForm.valid){
      alert("Form not valid");
      this.dialogRef.close();
    }

    this.WalletService.getBalance(this.access_token).subscribe((response) => {

      const WithdrawValue = this.WithdrawForm.value.value;

      if (response.balance < WithdrawValue) {
        alert("Insufficient funds");
        this.dialogRef.close;
      }
      else {
        this.WithdrawService.createWithdraw(WithdrawValue, this.access_token).subscribe((response) => {
          this.dialogRef.close();
        })
      }
    })


  }





}
