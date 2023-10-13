import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import urlJoin from 'url-join';
import { GetBalanceResponse } from './interfaces/getbalance-response';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http: HttpClient) { }

  public getBalance(access_token: string) {
    const url = urlJoin(environment.baseURL, environment.apiURI, 'wallet');

    return this.http.get<GetBalanceResponse>(url, {headers: {Authorization: `Bearer ${access_token}`}});
  }
}
