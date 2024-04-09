import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

receiveDataFromChild(event: string) {
this.childData = event
}

parentData:string = "This is the data from parent component";

childData:string=''



}
