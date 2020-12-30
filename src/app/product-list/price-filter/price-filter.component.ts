import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss']
})
export class PriceFilterComponent implements OnInit {
  @Output() filterApplied = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onFilterChange(value: string) {
    this.filterApplied.emit(value);
  }

}
