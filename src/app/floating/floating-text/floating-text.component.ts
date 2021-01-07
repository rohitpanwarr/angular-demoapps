import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-text',
  templateUrl: './floating-text.component.html',
  styleUrls: ['./floating-text.component.scss']
})
export class FloatingTextComponent implements OnInit {

  floating: any = {
    numberOfDivs: 8,
    floatingText: "A floating banner text."
  }

  constructor() { }

  ngOnInit(): void {
  }

}
