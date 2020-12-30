import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-view',
  templateUrl: './toggle-view.component.html',
  styleUrls: ['./toggle-view.component.scss']
})
export class ToggleViewComponent implements OnInit {
  @Output() changeView = new EventEmitter();
  @Input() isGridView: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeView($event, isGridView: boolean) {
    this.changeView.emit(isGridView);
  }

}
