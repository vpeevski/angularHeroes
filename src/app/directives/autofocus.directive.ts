import { Directive,Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[autofocus]'
})
export class AutofocusDirective {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    this.elementRef.nativeElement.focus();
  }
}
