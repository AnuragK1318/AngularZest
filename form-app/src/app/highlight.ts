import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  constructor(private el: ElementRef) {}
@HostListener('mouseenter') onMouseEnter() {
  this.el.nativeElement.style.backgroundColor = '#ffe58a';
  this.el.nativeElement.style.transition = '0.3s';
}

@HostListener('mouseleave') onMouseLeave() {
  this.el.nativeElement.style.backgroundColor = '';
}
}
