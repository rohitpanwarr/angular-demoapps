import { Component, OnInit, OnDestroy } from '@angular/core';
import { CounterService } from '../counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer-track',
  templateUrl: './timer-track.component.html',
  styleUrls: ['./timer-track.component.scss']
})
export class TimerTrackComponent implements OnInit, OnDestroy {

  timerLog: string[];
  timerTrack: string[];
  started: number;
  paused: number;

  // Subscription object
  private timeLogSubscription: Subscription;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.timeLogSubscription = this.counterService.updateTimeLogsEmitter.subscribe((counterLogs) => {
      this.timerLog = counterLogs.timerLog;
      this.timerTrack = counterLogs.timerTrack;
      this.started = counterLogs.started;
      this.paused = counterLogs.paused;
    });
  }

  ngOnDestroy(): void{
    this.timeLogSubscription.unsubscribe();
  }

}
