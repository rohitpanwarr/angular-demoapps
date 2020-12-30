import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    private element: ElementRef
  ) { }

  @Input('appTimes') set render(times: number) {
    
    for (let i = 0; i < times; i++) {
      let DOMNode = this.element.nativeElement.cloneNode();
      if (this.element.nativeElement.children.length) {
        this.element.nativeElement.children[i-1].appendChild(DOMNode);
      } else {
        this.element.nativeElement.appendChild(DOMNode);
      }
    }
  }

}
