import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../services/items.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuSelected: string;
  menuItems: string[];
  @Output() menuItem = new EventEmitter<string>();

  constructor(
    private itemService: ItemService,
  ) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(
      items => {
        this.menuItems = items;
        this.selectMenu(this.menuItems[0]);
      }
    );
  }

  selectMenu(opt: string) {
    this.menuSelected = opt;
    this.menuItem.emit(this.menuSelected);
  }
}
