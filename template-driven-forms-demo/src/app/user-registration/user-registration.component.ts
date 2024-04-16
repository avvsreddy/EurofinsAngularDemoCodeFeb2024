import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IStudent } from '../models/student';
import { StudentregService } from '../service/studentreg.service';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [FormsModule, JsonPipe],
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

  studentRegService = inject(StudentregService);

  onSubmit() {
    //console.log(stReg)
    this.studentRegService.saveStudent(this.student).subscribe((res) => {
      console.log(res);
    });
  }
}
