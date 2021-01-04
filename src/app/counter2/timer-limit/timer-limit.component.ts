import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-timer-limit',
  templateUrl: './timer-limit.component.html',
  styleUrls: ['./timer-limit.component.scss']
})
export class TimerLimitComponent implements OnInit {
  
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
  }

  onSubmitStart(e) {
    e.preventDefault();
    this.counterService.startTimerEmitter.next(parseInt(e.target.timerLimit.value));
    e.target.timerLimit.value = '';
  }

  onClickReset() {
    this.counterService.resetTimerEmitter.next();
  }

}
