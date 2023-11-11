import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/v1/auth/auth.service';
import { TransferenceService } from 'src/app/services/api/v1/transference/transference.service';
import { WalletService } from 'src/app/services/api/v1/wallet/wallet.service';

@Component({
  selector: 'app-client-transference-dialog',
  templateUrl: './client-transference-dialog.component.html',
  styleUrls: ['./client-transference-dialog.component.scss']
})
export class ClientTransferenceDialogComponent {

  public isBalanceModified: boolean = false;

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

  private access_token!: string;

  constructor(
    private form: FormBuilder,
    private walletService: WalletService,
    private authService: AuthService,
    private router: Router,
    private transferenceService: TransferenceService,
    public dialogRef: MatDialogRef<ClientTransferenceDialogComponent>
  ) {
    try {
      this.access_token = authService.jwt;
    } catch (e) {
      router.navigateByUrl('/client/auth/login');
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
