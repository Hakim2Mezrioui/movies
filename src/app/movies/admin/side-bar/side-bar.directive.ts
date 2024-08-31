import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSideBar]'
})
export class SideBarDirective {

  @Input('appSideBar') isSidebarVisible: boolean = false;

  constructor(
    private el: ElementRef
    ) {
    // el.nativeElement.style.visible=this.isSidebarVisible;
    console.log(this.isSidebarVisible)
  }

}
