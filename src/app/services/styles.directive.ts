import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyles]'
})
export class StylesDirective {

  constructor(private ref: ElementRef, private rend: Renderer2) {
    console.log("ref= ", ref);
    console.log("rend= ", rend);
  }

  @HostListener('mouseenter') mEnter() {
    this.rend.setStyle(this.ref.nativeElement, 'color', 'blue');
  }

  @HostListener('mouseout') mOut() {
    this.rend.setStyle(this.ref.nativeElement, 'color', 'green');
  }

}
