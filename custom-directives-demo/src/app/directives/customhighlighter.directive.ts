import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[toupper]',
  standalone: true
})
export class CustomhighlighterDirective {
 
  constructor(private el:ElementRef) 
  {
   
    el.nativeElement.style.textTransform='uppercase';
    
   }

}
