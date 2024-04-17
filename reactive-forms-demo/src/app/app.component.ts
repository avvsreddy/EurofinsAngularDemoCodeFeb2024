import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { mobileNumberValidator } from './custom-validators/custom.validators';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
deleteSkill(index:number) {
  console.log(index)
 this.Skills.removeAt(index);
}
addSkill() {
  this.Skills.push(new FormControl());
}
  ngOnInit(): void {
    //this.studentForm.get(this.RollNo)valueChanges.subscribe
    //()
    this.validateRollNo();

    this.studentForm.get('subscribe')?.valueChanges.subscribe( checked => {
    if(checked)
      {
        this.studentForm.get('email')?.addValidators([Validators.required, Validators.email]);
      }  
      else
      {
        this.studentForm.get('email')?.removeValidators([Validators.required,Validators.email]);
      }

      this.studentForm.get('email')?.updateValueAndValidity();
    })


  }
rollNoErrMsg:string=''
fb:FormBuilder = inject(FormBuilder);
//fb:FormBuilder = new FormBuilder();
  onSubmit() {
    
if(this.studentForm.valid)
  {

    console.log(this.studentForm.value)
    // send the form value to api for saving
  }
  else
  {
    console.log("invalid form data");
  }

}
  title = 'reactive-forms-demo';

private validateRollNo(){
  this.RollNo?.valueChanges.subscribe(rn => {
    if(this.RollNo?.invalid && this.RollNo.dirty)
      {
          this.rollNoErrMsg = "Roll No is Required";
      }
      else
      {
        this.rollNoErrMsg='';
      }
  })
}


// studentForm = new FormGroup(
//   {
//     rollno:new FormControl(),
//     name:new FormControl(),
//     email:new FormControl(),
//     mobile:new FormControl(),
//     gender:new FormControl(),

//   }
// );



studentForm = this.fb.group(
  {
    rollno:(['',Validators.required]),
    name:(['',Validators.required]),
    email:(['']),
    mobile:(['',mobileNumberValidator]),
    gender:(['']),
    subscribe:([false]),
    skills:this.fb.array([]),
    
  }
);


get Skills()
{
  return this.studentForm.get('skills') as FormArray;
}

get RollNo()
{
  return this.studentForm.get('rollno');
}
get MobileNo()
{
  return this.studentForm.get('mobile');
}


}
