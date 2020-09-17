import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  //the property of an element to change
  @HostBinding('class.open') isOpen = false;
  //the event to listen to, to change the property element
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false; // event.target is the component that has the appDropdown directive attached to it
  }
  constructor(private elRef: ElementRef) {}
}
