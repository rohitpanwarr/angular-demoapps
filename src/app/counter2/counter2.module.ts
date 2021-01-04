import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Counter2RoutingModule } from './counter2-routing.module';
import { CounterComponent } from './counter/counter.component';
import { SharedModule } from '../shared/shared.module';
import { CountDownComponent } from './count-down/count-down.component';
import { TimerLimitComponent } from './timer-limit/timer-limit.component';
import { TimerTrackComponent } from './timer-track/timer-track.component';


@NgModule({
  declarations: [CounterComponent, CountDownComponent, TimerLimitComponent, TimerTrackComponent],
  imports: [
    CommonModule,
    Counter2RoutingModule,
    SharedModule
  ]
})
export class Counter2Module { }
