import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives';

  isAuthenticated:boolean=false;
  confidentialData:string = "This is very confidential data"

  products:any[]=
  [
    {id:1,name:'IPhone 10',price:58000},
    {id:2,name:'IPhone 11',price:68000},
    {id:3,name:'IPhone 12',price:78000},
    {id:4,name:'IPhone 13',price:88000},
  ]



}
