import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit, OnDestroy {
  
  counter: number = 0;
  // Subscription object
  private updateCounterSubscription: Subscription;
  
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.updateCounterSubscription = this.counterService.updateCounterEmitter.subscribe((counter: number) => {
      this.counter = counter;
    });
  }

  ngOnDestroy(): void {
    this.updateCounterSubscription.unsubscribe();
  }

}
