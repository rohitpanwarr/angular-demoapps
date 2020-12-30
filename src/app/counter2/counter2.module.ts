import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Counter2RoutingModule } from './counter2-routing.module';
import { CounterComponent } from './counter/counter.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    Counter2RoutingModule,
    SharedModule
  ]
})
export class Counter2Module { }
