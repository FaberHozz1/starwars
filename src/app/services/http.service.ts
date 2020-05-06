import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLS } from '../const/urls';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(
    private http: HttpClient,
  ) { }

  httpGet(apiURL: string): Observable<any> {
    return this.http.get(apiURL);
  }
}
