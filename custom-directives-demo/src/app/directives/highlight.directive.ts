import { Directive, ElementRef, Renderer2 } from "@angular/core";


@Directive({
    selector:'[highlight]',
    standalone: true,
})
export class HighlightDirective{

constructor(private element : ElementRef){ //, private renderer : Renderer2 ){

    // add background color to yellow
    //this.renderer.setStyle(this.element.nativeElement,"background-color","yellow");    
    this.element.nativeElement.style.backgroundColor='yellow';
    this.element.nativeElement.style.textDecoration='underline';
   
}
}