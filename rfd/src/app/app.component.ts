import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IUser } from './models/user';
import { JsonPipe } from '@angular/common';
import { mobileNumberValidator2 } from './custom-validators/mobilenumbervalidator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.userForm.valueChanges.subscribe(v => {

      if(this.userForm.get('name')?.invalid && this.userForm.get('name')?.dirty)
        {
            this.errMsg = "Name is required";
        }
        else{this.errMsg=''}

    });
  }
errMsg:string='';
fb=inject(FormBuilder);

  title = 'rfd';


user:IUser={
  id:0,
  name:'',
  email:'',
  mobile:'',
  gender:'',
  isActive:false,
  userType:'',
}

// userForm = new FormGroup(
//   {
//     id : new FormControl(),
//     name : new FormControl('Venkat'),
//     email: new FormControl('default@mail.com'),
//     mobile: new FormControl(),
//     gender: new FormControl(),
//     isActive: new FormControl(true),
//     userType: new FormControl()
//   }
// );

userForm = this.fb.group(
  {
    id:[],
    name:['Venkat',Validators.required],
    email:['default@mail.com',[Validators.required, Validators.email]],
    mobile:['',[Validators.required,mobileNumberValidator2]],
    gender:[],
    isActive:[],
    userType:[],
  }
);

onSubmit() {
  if (this.userForm.valid) {
    console.log('Form submitted successfully!');
    console.log(this.userForm.value);
    // Here you can send the form data to your backend or perform any other actions
  } else {
    console.log('Please fill in all required fields correctly.');
  }
  }

}
