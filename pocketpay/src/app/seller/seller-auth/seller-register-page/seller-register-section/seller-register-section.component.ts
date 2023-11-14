import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SellerService } from 'src/app/services/api/v1/seller/seller.service';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/api/v1/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-register-section',
  templateUrl: './seller-register-section.component.html',
  styleUrls: ['./seller-register-section.component.scss']
})
export class SellerRegisterSectionComponent {
  
  public registerForm: FormGroup = this.form.group({
    fullName: new FormControl('', [Validators.required]),
    CNPJ: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  public get fullName() {
    return this.registerForm.get('fullName') as FormControl;
  }

  public get CNPJ() {
    return this.registerForm.get('CNPJ') as FormControl;
  }

  public get email() {
    return this.registerForm.get('email') as FormControl;
  }

  public get password() {
    return this.registerForm.get('password') as FormControl;
  }

  constructor(
    private form: FormBuilder, 
    private sellerService: SellerService,
    private authService: AuthService,
    private router: Router
  ) { }

  sendRegisterRequest() {
    const fullName = this.fullName.value;
    const CNPJ = this.CNPJ.value;
    const email = this.email.value;
    const password = this.password.value;

    const isFormValid = this.registerForm.valid && email != null && password != null && fullName != null && CNPJ != null;

    if (!isFormValid) {
      alert("Form not valid");
      return;
    }

    var firstName, lastName: string;
    const fullNameSplitted = fullName.split(' ');

    if (fullNameSplitted.length > 1) {
      firstName = fullNameSplitted[0];
      lastName = fullNameSplitted[fullNameSplitted.length - 1];
    } else {
      firstName = fullNameSplitted[0];
      lastName = '';
    }

    this.sellerService.register(firstName, lastName, CNPJ, email, password)
    .pipe(
      switchMap((r => this.sellerService.login(email, password)))
    ).subscribe({
      next: (response) => {
        this.authService.jwt = response.access_token;
        this.router.navigateByUrl('/seller/dashboard');
      },
      error: (error) => {
        if (error.status == 401) {
          alert('Invalid email or password');
        }
      }
    })
  }
}
