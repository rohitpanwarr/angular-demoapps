import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';

import { PlaceholderDirective } from '../placeholder.directive';
import { DivComponent } from '../div/div.component';

@Component({
  selector: 'app-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.scss']
})
export class DynamicDivComponent implements OnInit {

  @ViewChild(PlaceholderDirective) divHost: PlaceholderDirective;

  counter: number = 0;
  numberOfDivs = 10; // number of divs per page.

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  showDiv() {

    for (let index: number = 0; index < this.numberOfDivs; index++) {

      const divComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DivComponent);
      const hostViewContainerRef = this.divHost.viewContainerRef;
    
      //hostViewContainerRef.clear();
      const componentRef = hostViewContainerRef.createComponent(divComponentFactory);
      componentRef.instance.divCounter = ++this.counter;
    }

  }

  onScroll() {
    this.showDiv();
  }

}
