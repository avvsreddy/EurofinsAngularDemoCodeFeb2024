import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStudent } from '../models/student';
import { apiUrl } from '../shared/apiurl';

@Injectable({
  providedIn: 'root'
})
export class StudentregService {

  constructor(private http:HttpClient) { }


  saveStudent(student:IStudent){
    return this.http.post(apiUrl+"student-reg",student);
  }
  getStudents(){
    return this.http.get(apiUrl+"student-reg");
  }

}
