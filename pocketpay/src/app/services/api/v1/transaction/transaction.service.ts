import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import urlJoin from 'url-join';
import { TransactionResponse } from './interfaces/transaction-response';
import { GetAllTransactionsResponse } from './interfaces/get-all-transactions-response';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  public getTransactionById(id: string, access_token: string) {
    const url = urlJoin(environment.baseURL, environment.apiURI, 'transaction', id);

    return this.http.get<TransactionResponse>(url, {headers: {Authorization: `Bearer ${access_token}`}});
  }

  public getAllTransactions(access_token: string) {
    const url = urlJoin(environment.baseURL, environment.apiURI, 'transaction');

    return this.http.get<GetAllTransactionsResponse>(url, {headers: {Authorization: `Bearer ${access_token}`}});
  }
}
