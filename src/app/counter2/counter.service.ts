import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface CounterLogs {
  timerLog: string[],
  timerTrack: string[]
}

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  startTimerEmitter = new Subject<number>();
  pauseTimerEmitter = new Subject();
  resetTimerEmitter = new Subject();
  updateCounterEmitter = new Subject<number>();
  updateTimeLogsEmitter = new Subject<CounterLogs>();

  constructor() { }
}
