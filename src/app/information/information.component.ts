import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnChanges {
  itemInfo: any;
  @Input() itemSelectedInfo: any;


  ngOnChanges(): void {
    if (this.itemSelectedInfo) {
      this.itemInfo = this.itemSelectedInfo;
      console.log('---> askjdhasd: ', this.itemInfo);
    }
  }

}
