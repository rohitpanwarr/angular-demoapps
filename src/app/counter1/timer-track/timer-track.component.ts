import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer-track',
  templateUrl: './timer-track.component.html',
  styleUrls: ['./timer-track.component.scss']
})
export class TimerTrackComponent implements OnInit {
  @Input() timer;
  
  constructor() { }

  ngOnInit(): void {
  }

}
