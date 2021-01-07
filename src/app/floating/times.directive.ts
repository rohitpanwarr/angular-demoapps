import { Directive, ElementRef, Input, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(private element: ElementRef) { }

  @Input('appTimes') set render(floating: any) {
    let index = 0;
    let nodeList = document.querySelectorAll('.floating');
    for (index = 0; index < floating.numberOfDivs; index++) {
      let DOMNode = this.element.nativeElement.cloneNode();
      nodeList = document.querySelectorAll('.floating');
      nodeList[index].appendChild(DOMNode);
    }
    nodeList = document.querySelectorAll('.floating');
    nodeList[index].innerHTML = `<span class="text">${floating.floatingText}</span>`;
  }

}
