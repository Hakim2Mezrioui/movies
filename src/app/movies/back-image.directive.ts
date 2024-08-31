import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[BackImage]'
})
export class BackImageDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') mouseenter() {
    this.el.nativeElement.style.backgroundSize = "120% 120%";
    this.el.nativeElement.style.backgroundPosition = "center";
  }

  @HostListener('mouseleave') mouseleave() {
    this.el.nativeElement.style.backgroundSize = "100% 100%";
    this.el.nativeElement.style.backgroundPosition = "center";
  }

}
