import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/v1/auth/auth.service';
import { ClientService } from 'src/app/services/api/v1/client/client.service';
import { ClientLoginResponse } from 'src/app/services/api/v1/client/interfaces/client-login-response';
import { ClientRegisterResponse } from 'src/app/services/api/v1/client/interfaces/client-register-response';

@Component({
  selector: 'app-client-register-section',
  templateUrl: './client-register-section.component.html',
  styleUrls: ['./client-register-section.component.scss']
})
export class ClientRegisterSectionComponent {
  registerForm = this.form.group({
    fullName: new FormControl('', [Validators.required]),
    CPF: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor (
    private form: FormBuilder,
    private authService: AuthService,
    private clientService: ClientService,
    private router: Router
  ) {}

  sendRegisterRequest() {
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    const fullName = this.registerForm.get('fullName')?.value;
    const CPF = this.registerForm.get('CPF')?.value;

    const isFormValid = this.registerForm.valid && email != null && password != null && fullName != null && CPF != null;

    if (!isFormValid) return;

    var firstName, lastName: string;

    const fullNameSplitted = fullName.split(' ');

    if (fullNameSplitted.length > 1) {
      firstName = fullNameSplitted[0];
      lastName = fullNameSplitted[fullNameSplitted.length - 1];
    } else {
      firstName = fullNameSplitted[0];
      lastName = '';
    }

    if (isFormValid) {
      this.clientService.register(firstName, lastName, CPF, email, password)
      .subscribe({
        next: (response: ClientRegisterResponse) => {
          this.clientService.login(email, password).subscribe({
            next: (response: ClientLoginResponse) => {
              this.authService.jwt = response.access_token;
              this.router.navigate(['/']);
            },
            error: (error) => {
              console.log("An error occurred: ", error);
            }
          })
        },
        error: (error) => {
          console.log("An error occurred: ", error);
        }
      })
    }

  }
}
