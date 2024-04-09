import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
  standalone: true
})
export class HighlighterDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { 
       
        this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
  }

}
