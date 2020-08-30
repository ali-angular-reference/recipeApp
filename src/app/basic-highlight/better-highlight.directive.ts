import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // reference the background color style to backgroundColor
  @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent';

  constructor(private elRef:ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue')
  }

  // mouse enter is one of the events that can happen to the dom elements
  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','cyan')
    this.backgroundColor = 'cyan'
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent')
    this.backgroundColor = 'transparent'
  }
}
