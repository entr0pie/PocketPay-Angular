import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import urlJoin from 'url-join';
import { DepositResponse } from './interfaces/deposit-response';
import { GetDepositsResponse } from './interfaces/getdeposits-response';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  constructor(private http: HttpClient) { }

  public getDeposits(access_token: string) {
    const url = urlJoin(environment.baseURL, environment.apiURI, 'deposit');

    return this.http.get<GetDepositsResponse>(url, {headers: {Authorization: `Bearer ${access_token}`}});
  }

  public deposit(value: number, access_token: string) {
    const url = urlJoin(environment.baseURL, environment.apiURI, 'deposit');

    return this.http.post<DepositResponse>(url, {
      value
    }, {headers: {Authorization: `Bearer ${access_token}`}});
  }
}
