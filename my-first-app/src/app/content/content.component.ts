import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

userName:string = "Ravi";
userRole:string = "admin";
website:string="www.google.com";
isActive:boolean=true;

btnClicked()
{
  alert('Button Clicked...')
  this.userName = "Ravi Kumar";
}


}
