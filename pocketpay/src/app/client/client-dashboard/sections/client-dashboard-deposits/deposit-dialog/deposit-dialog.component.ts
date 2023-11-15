import { Deposit } from './../../../../../services/api/v1/deposit/interfaces/getdeposits-response';
import { DepositService } from './../../../../../services/api/v1/deposit/deposit.service';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../../services/api/v1/auth/auth.service';
import { Router } from '@angular/router';
import { GetBalanceResponse } from '../../../../../services/api/v1/wallet/interfaces/getbalance-response';


@Component({
  selector: 'app-deposit-dialog',
  templateUrl: './deposit-dialog.component.html',
  styleUrls: ['./deposit-dialog.component.scss']
})
export class DepositDialogComponent {

  public DepositForm: FormGroup = new FormGroup ({
    value: new FormControl('', [Validators.required, Validators.min(0.1)])
  });

  public get value() {
    return this.DepositForm.get('value') as FormControl;
  }

  private access_token!: string;

  constructor(
    public dialogRef: MatDialogRef<DepositDialogComponent>,
    private form: FormBuilder,
    private AuthService: AuthService,
    private Router: Router,
    private DepositService: DepositService
  ) {
    try {
      this.access_token = AuthService.jwt;
    } catch (e) {
      Router.navigateByUrl('/client/auth/login');
    }
  }

  public cancelDeposit() {
    this.dialogRef.close();
  }

  public sendDeposit() {
    if(!this.DepositForm.valid){
      alert("Form not valid");
      this.dialogRef.close();
    }
    const DepositValue = this.DepositForm.value.value;
    this.DepositService.deposit(DepositValue, this.access_token).subscribe((response) => {
      this.dialogRef.close();
    })
  }
}
