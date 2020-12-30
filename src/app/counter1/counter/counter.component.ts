import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  timer = {
    counter: 0,
    isStart: false,
    started: 0,
    paused: 0,
    timerLog: [],
    timerTrack: []
  };

  timerInterval: any;

  constructor() { }

  ngOnInit(): void {
  }

  startTimer() {
    this.clearTimerInterval();
    this.timerInterval = setInterval(() => {
      this.timer.counter--;
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.timerInterval);
  }

  clearTimerInterval() {
    clearInterval(this.timerInterval);
  }

  resetTimer() {
    this.timer.counter = 0;
    this.timer.isStart = false;
    this.timer.timerLog = [];
    this.timer.timerTrack = [];

    clearInterval(this.timerInterval);
  }

}
