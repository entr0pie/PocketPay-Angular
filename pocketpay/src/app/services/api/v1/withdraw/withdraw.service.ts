import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import urlJoin from 'url-join';
import { CreateWithdrawResponse } from './interfaces/create-withdraw-response';
import { GetAllWithdrawsResponse } from './interfaces/get-all-withdraws-response';

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {

  constructor(private http: HttpClient) { }

  public getWithdraws(access_token: string) {
    const url = urlJoin(environment.baseURL, environment.apiURI, 'withdraw');

    return this.http.get<GetAllWithdrawsResponse>(url, {headers: {Authorization: `Bearer ${access_token}`}});
  }

  public createWithdraw(value: number, access_token: string) {
    const url = urlJoin(environment.baseURL, environment.apiURI, 'withdraw');

    return this.http.post<CreateWithdrawResponse>(url, {
      value
    }, {headers: {Authorization: `Bearer ${access_token}`}});
  };
}
