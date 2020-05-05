import { Component, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { ISubMenu } from '../interfaces/sub-menu.interface';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnChanges {
  @Input() subMenuItems: ISubMenu;
  @Output() subMenuItem = new EventEmitter<string>();
  @Output() seeMore = new EventEmitter<string>();
  subMenuSelected: any;

  ngOnChanges(): void {
    if (this.subMenuItems && this.subMenuItems.results) {
      this.selectMenu(this.subMenuItems.results[0]);
    }
  }

  selectMenu(opt: any) {
    this.subMenuSelected = opt;
    this.subMenuItem.emit(this.subMenuSelected);
  }

  onSeeMore() {
    this.seeMore.emit(this.subMenuItems.next);
  }
}
