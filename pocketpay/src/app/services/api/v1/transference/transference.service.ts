import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import urlJoin from 'url-join';
import { GetAllTransferencesResponse } from './interfaces/get-all-transferences-response';
import { CreateTransferenceResponse } from './interfaces/create-transference-response';

@Injectable({
  providedIn: 'root'
})
export class TransferenceService {

  constructor(private http: HttpClient) { }

  public getTransferences(access_token: string) {
    const url = urlJoin(environment.baseURL, environment.apiURI, 'transference');

    return this.http.get<any>(url, {headers: {Authorization: `Bearer ${access_token}`}});
  }

  public createTransference(receiver: string, value: number, access_token: string) {
    const url = urlJoin(environment.baseURL, environment.apiURI, 'transference');

    return this.http.post<CreateTransferenceResponse>(url, {
      receiver,
      value
    }, {headers: {Authorization: `Bearer ${access_token}`}});
  }

}
