import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {
  @Input() counter;
  
  constructor() { }

  ngOnInit(): void {
  }

}
