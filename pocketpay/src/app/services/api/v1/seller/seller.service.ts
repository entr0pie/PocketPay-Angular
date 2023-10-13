import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import urlJoin from 'url-join';
import { SellerRegisterResponse } from './interfaces/seller-register-response';
import { SellerLoginResponse } from './interfaces/seller-login-response';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }

  public login(email: string, password: string) {
    const url = urlJoin(environment.baseURL, environment.apiURI, 'seller', 'login');

    return this.http.post<SellerLoginResponse>(url, {
      email,
      password
    });
  }

  public register(name: string, surname: string, cnpj: string, email: string, password: string) {
    return this.http.post<SellerRegisterResponse>('http://localhost:5000/api/v1/seller/register', {
      name,
      surname,
      cnpj,
      email,
      password
    });
  }

}
