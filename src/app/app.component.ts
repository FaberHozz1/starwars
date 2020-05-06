import { Component } from '@angular/core';
import { SubMenuService } from './services/sub-menu.service';
import { URLS } from './const/urls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'starwars';
  subMenuItems: any;
  menuItem: string;

  constructor(
    private subMenuService: SubMenuService,
  ) { }

  onMenuItemSelected(event: string) {
    this.subMenuItems = [];
    this.menuItem = event;
    const url = URLS.BASE_URL + `${event}`;
    this.getSubMenuItems(url);
  }

  onSelectSubMenuItem(event: any) {
    console.log('--> onSelectSubMenuItem: ', event);
  }

  onSeeMoreSubMenuItems(event: any) {
    this.getSubMenuItems(event);
  }

  getSubMenuItems(url) {
    this.subMenuService.getSubMenuItems(this.menuItem, url).subscribe(
      items => {
        this.subMenuItems = items;
      }
    );
  }
}
