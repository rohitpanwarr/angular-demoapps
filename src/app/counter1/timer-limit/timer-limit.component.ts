import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer-limit',
  templateUrl: './timer-limit.component.html',
  styleUrls: ['./timer-limit.component.scss']
})
export class TimerLimitComponent implements OnInit {
  @Input() timer;
  @Output() startTimer = new EventEmitter();
  @Output() pauseTimer = new EventEmitter();
  @Output() resetTimer = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitStart(e) {
    e.preventDefault();
    if (e.target.timerLimit.value) {
      this.timer.counter = e.target.timerLimit.value;
      this.timer.isStart = true;
    } else {
      this.timer.isStart = !this.timer.isStart;
    }

    if (this.timer.isStart) {
      this.timer.started++;
      this.startTimer.emit();

      // Track timer
      this.timer.timerLog.push(`Started at ${this.timer.counter}`);
      this.timer.timerTrack.push('Started at ' + new Date().toLocaleString());
    } else {
      this.timer.paused++
      this.pauseTimer.emit();

      // Track timer
      this.timer.timerLog.push(`Paused at ${this.timer.counter}`);
      this.timer.timerTrack.push('Paused at ' + new Date().toLocaleString());
    }
    e.target.timerLimit.value = '';
  }

  onClickReset() {
    this.resetTimer.emit();
  }

}
