import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.scss']
})
export class DivComponent implements OnInit {

  divCounter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick() {
    alert(`Button of div ${this.divCounter} clicked !`)
  }

}
