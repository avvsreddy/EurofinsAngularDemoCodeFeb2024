import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {




@ViewChild("firstNumber") 
fno:ElementRef

@ViewChild("secondNumber") 
sno:ElementRef;

firstInput:'';
secondInput:'';


result:number=0;

findSum3() {
   this.result = parseInt( this.firstInput) + parseInt( this.secondInput)
}


findSum(fno:string, sno:string){
this.result = parseInt( fno) + parseInt(sno);
}
findSum2(){
  //alert("finding sum")
  let no1 = this.fno.nativeElement.value;
  let no2 = this.sno?.nativeElement.value;
  this.result = parseInt( no1) + parseInt(no2);
 
}

}
