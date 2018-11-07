import { Directive,Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[autodisable]'
})
export class AutoDisableDirective {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    this.elementRef.nativeElement.disabled = true;
  }
}
