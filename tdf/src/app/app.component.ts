import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms'
import { JsonPipe } from '@angular/common';
import { UserReg } from './models/UserReg';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
uname:string=''
userReg:UserReg={
  id:0,
         name:'',
         email:'string',
         mobile:'string',
         gender:'string',
         area:'string',
         city:'string',
         pin:'string',
}

onSubmit() {
alert(this.userReg?.name)
}


  title = 'tdf';
}
