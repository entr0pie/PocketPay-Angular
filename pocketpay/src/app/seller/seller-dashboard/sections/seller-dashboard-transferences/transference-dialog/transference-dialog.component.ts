import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClientTransferenceDialogComponent } from 'src/app/client/client-dashboard/sections/client-dashboard-transferences/client-transference-dialog/client-transference-dialog.component';
import { AuthService } from 'src/app/services/api/v1/auth/auth.service';
import { TransferenceService } from 'src/app/services/api/v1/transference/transference.service';
import { WalletService } from 'src/app/services/api/v1/wallet/wallet.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transference-dialog',
  templateUrl: './transference-dialog.component.html',
  styleUrls: ['./transference-dialog.component.scss']
})
export class TransferenceDialogComponent {

  private access_token!: string;

  public transferenceForm: FormGroup = new FormGroup({
    receiver: new FormControl('', [Validators.required, Validators.email]),
    value: new FormControl('', [Validators.required, Validators.min(0.1)])
  });

  public get receiver() {
    return this.transferenceForm.get('receiver') as FormControl;
  }


  public get value() {
    return this.transferenceForm.get('value') as FormControl;
  }

  constructor(
    private form: FormBuilder,
    private walletService: WalletService,
    private authService: AuthService,
    private router: Router,
    private transferenceService: TransferenceService,
    public dialogRef: MatDialogRef<ClientTransferenceDialogComponent>,
    public DatePipe: DatePipe
  ) {
    try {
      this.access_token = this.authService.jwt;
    } catch (e) {
      router.navigateByUrl('/seller/auth/login');
    }
  }

  public cancelTransference() {
    this.dialogRef.close();
  }

  public sendTransference() {
    if (!this.transferenceForm.valid) {
      alert("Form not valid");
      this.dialogRef.close();
    }

    this.walletService.getBalance(this.access_token).subscribe((response) => {
      const receiver = this.transferenceForm.value.receiver;
      const transactionValue = this.transferenceForm.value.value;

      if (response.balance < transactionValue) {
        alert("Insufficient funds");
        this.dialogRef.close();
      } else {
        this.transferenceService.createTransference(receiver, transactionValue, this.access_token).subscribe((response) => {
          this.dialogRef.close();
        });
      }
    });
  }




}
