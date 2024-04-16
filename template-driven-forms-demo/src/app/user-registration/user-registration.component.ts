import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IStudent } from '../models/student';
import { StudentregService } from '../service/studentreg.service';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [FormsModule, JsonPipe,CommonModule],//,BrowserAnimationsModule, ToastrModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css',
})
export class UserRegistrationComponent {
  student: IStudent = {
    id: 0,
    name: '',
    email: '',
    mobile: '',
    dob: '',
    gender: '',
    subscribe: false,
    course: '',
  };
  
  //constructor(private toastrService: ToastrService) {}
  msg:string=''
  studentRegService = inject(StudentregService);
//npm install ngx-toastr
  onSubmit(form:NgForm) {
    console.log(form)
    //this.studentRegService.saveStudent(this.student).subscribe((res) => {
      //console.log(res);
      //this.toastrService.info("Student Registration Success","Student Registration");
      //this.msg="Student Registration Success";
    }
  }

