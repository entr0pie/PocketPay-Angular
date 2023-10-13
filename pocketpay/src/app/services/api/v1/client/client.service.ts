import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import urlJoin from 'url-join';
import { ClientLoginResponse } from './interfaces/client-login-response';
import { ClientRegisterResponse } from './interfaces/client-register-response';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const url = urlJoin(environment.baseURL, environment.apiURI, 'client', 'login');

    return this.http.post<ClientLoginResponse>(url, {
      email,
      password
    });
  }

  register(name: string, surname: string, cpf: string, email: string, password: string) {
    const url = urlJoin(environment.baseURL, environment.apiURI, 'client', 'register');

    return this.http.post<ClientRegisterResponse>(url, {
      name,
      surname,
      cpf,
      email,
      password
    });
  }
}
