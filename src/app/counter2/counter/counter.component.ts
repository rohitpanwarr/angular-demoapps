import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  timer = {
    counter: 0,
    isStart: false,
    started: 0,
    paused: 0,
    timerLog: [],
    timerTrack: []
  };

  timerInterval: any;
  // Subscription object
  private startSubscription: Subscription;
  private pauseSubscription: Subscription;
  private resetSubscription: Subscription;

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit(): void {

    this.startSubscription = this.counterService.resetTimerEmitter.subscribe(() => {
      this.resetTimer();
      this.updateCountDown();
    });

    this.pauseSubscription = this.counterService.pauseTimerEmitter.subscribe(() => {
      this.pausetimer();
      this.updateCountDown();
    });

    this.resetSubscription = this.counterService.startTimerEmitter.subscribe((counter: number) => {
      this.startTimer(counter);
      this.updateCountDown();
    });
  }

  ngOnDestroy() {
    this.startSubscription.unsubscribe();
    this.pauseSubscription.unsubscribe();
    this.resetSubscription.unsubscribe();
    this.clearTimerInterval();
  }

  startTimer(counter: number) {
    if (counter) {
      this.timer.counter = counter;
      this.timer.isStart = true;
    } else {
      this.timer.isStart = !this.timer.isStart;
    }

    if (this.timer.isStart) {
      this.timer.started++;
      // Track timer
      this.timer.timerLog.push(`Started at ${this.timer.counter}`);
      this.timer.timerTrack.push('Started at ' + new Date().toLocaleString());

      this.clearTimerInterval();
      this.timerInterval = setInterval(() => {
        this.timer.counter--;
        this.updateCountDown();
      }, 1000);
    } else {
      this.counterService.pauseTimerEmitter.next();
    }
  }

  pausetimer() {
    this.timer.paused++
      
    // Track timer
    this.timer.timerLog.push(`Paused at ${this.timer.counter}`);
    this.timer.timerTrack.push('Paused at ' + new Date().toLocaleString());

    clearInterval(this.timerInterval);
  }

  resetTimer() {
    this.timer.counter = 0;
    this.timer.isStart = false;
    this.timer.timerLog = [];
    this.timer.timerTrack = [];
    clearInterval(this.timerInterval);
  }
  updateCountDown() {
    this.counterService.updateCounterEmitter.next(this.timer.counter);
    this.counterService.updateTimeLogsEmitter.next({
      timerLog: this.timer.timerLog,
      timerTrack: this.timer.timerTrack,
      started: this.timer.started,
      paused: this.timer.paused
    });
  }

  clearTimerInterval() {
    clearInterval(this.timerInterval);
  }
}
