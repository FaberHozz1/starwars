import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { URLS } from '../const/urls';

@Injectable()
export class ItemService {
  private items: string[];

  constructor(
    private http: HttpService,
  ) { }

  getItems(): Observable<string[]> {
    if (this.items) {
      return of(this.items);
    }
    return this.callItems();
  }

  private callItems(): Observable<any> {
    this.items = [];
    return this.http.httpGet(URLS.BASE_URL).pipe(
      map(
        (res: any) => {
          for (const key of Object.keys(res)) {
            this.items.push(key);
          }
          return this.items;
        }
      ),
    );
  }
}
