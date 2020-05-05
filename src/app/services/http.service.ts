import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLS } from '../const/urls';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(
    private http: HttpClient,
  ) { }

  httpGet(option?: string, id?: number): Observable<any> {
    console.log('apiURL: ');
    let apiURL = `${URLS.BASE_URL}/`;
    apiURL += option ? `${option}/` : '';
    apiURL += (option && id) ? id : '';
    return this.http.get(apiURL);
  }
}
