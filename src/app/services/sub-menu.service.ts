import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ISubMenu } from '../interfaces/sub-menu.interface';

@Injectable()
export class SubMenuService {
  private subMenuItems: ISubMenu;
  private menuItem: string;

  constructor(
    private http: HttpService,
  ) { }

  getSubMenuItems(menuItem: string, url?: string): Observable<ISubMenu> {
    if (this.menuItem === menuItem) {
      return this.callSubMenuItems(url);
    }
    this.menuItem = menuItem;
    this.subMenuItems = null;
    return this.callSubMenuItems(url);
  }

  private callSubMenuItems(url: string): Observable<any> {
    return this.http.httpGet(url).pipe(
      map(
        (res: any) => {
          if (res && res.results) {
            if (this.subMenuItems && this.subMenuItems.results) {
              this.subMenuItems.next = res.next;
              for (const result of res.results) {
                this.subMenuItems.results.push(result);
              }
            } else {
              this.subMenuItems = {
                count: res.count,
                next: res.next,
                previous: res.previous,
                results: res.results,
              };
            }
          } else {
            this.subMenuItems = {
              count: 0,
              next: '',
              previous: '',
              results: res,
            };
          }
          return this.subMenuItems;
        }
      ),
    );
  }
}
