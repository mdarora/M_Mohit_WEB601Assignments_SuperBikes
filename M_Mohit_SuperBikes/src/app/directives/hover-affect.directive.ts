import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  constructor(private elm: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.elm.nativeElement.style.textDecoration = 'underline';
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.elm.nativeElement.style.textDecoration = 'none';
  }

}
