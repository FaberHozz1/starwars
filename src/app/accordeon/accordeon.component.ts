import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordeon',
  templateUrl: './accordeon.component.html',
  styleUrls: ['./accordeon.component.scss']
})
export class AccordeonComponent implements OnInit {

  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
