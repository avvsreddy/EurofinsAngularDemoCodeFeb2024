import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IStudent } from './models/IStudent';
import { CurrencyPipe, DatePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { MycustompipePipe } from './pipes/mycustompipe.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DatePipe, CurrencyPipe, PercentPipe, UpperCasePipe, MycustompipePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pipes-demo';
  totMarks = 400;
  students: IStudent[] = [
    {
    rollNumber: 1234,
    name: 'Sachin',
    lang1: 70,
    lang2: 67,
    science: 68,
    maths: 54,
    fee: 5600.89,
    dob: new Date(2000, 1, 20),
  },
  {
    rollNumber: 5678,
    name: 'Ravi',
    lang1: 70,
    lang2: 67,
    science: 68,
    maths: 54,
    fee: 5600.89,
    dob: new Date(2001, 12, 20),
  },
  {
    rollNumber: 1234,
    name: 'Kumar',
    lang1: 70,
    lang2: 67,
    science: 58,
    maths: 54,
    fee: 5600.89,
    dob: new Date(1999, 1, 20),
  }

];
}
