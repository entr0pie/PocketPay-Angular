import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import urlJoin from 'url-join';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  public getProfile(access_token: string) {
    const url = urlJoin(environment.baseURL, environment.apiURI, 'profile');

    // Como definir algo variavel como o /api/v1/profile?
    return this.http.get(url, {headers: {Authorization: `Bearer ${access_token}`}});
  }
}
