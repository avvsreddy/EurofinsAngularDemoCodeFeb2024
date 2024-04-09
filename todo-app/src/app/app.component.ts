import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildActivationEnd, RouterOutlet } from '@angular/router';
import { ITodo } from './models/iTodo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


isCompleteChanged(index: number) {
// get the todolist from local storage
const todoData = localStorage.getItem('mytodos');
    if(todoData != null)
    {
      const todoObj = JSON.parse(todoData);
      this.todoList = todoObj;
// update the isCompleted for the index
      this.todoList[index].isCompleted = !this.todoList[index].isCompleted
      // store the todolist back into local storage
      localStorage.setItem("mytodos", JSON.stringify(this.todoList));
    }



}
  
  
  
  ngOnInit(): void {
    // read data from local storate and store in todolist

    const todoData = localStorage.getItem('mytodos');
    if(todoData != null)
    {
      const todoObj = JSON.parse(todoData);
      this.todoList = todoObj;
    }
  }
  
  // @ViewChild("todoEle") 
  // todoText?:ElementRef;




todoText:string='';

  todoList:ITodo[]=[];

  onClick(){
    //alert(this.todoText?.nativeElement.value)
    //alert(this.todoText)

    const todoItem:ITodo={
      id:this.todoList.length + 1,
      todoText:this.todoText,
      isCompleted:false
    }

    this.todoList.push(todoItem);
    this.todoText='';
    // store the todo list data into local storage

    localStorage.setItem("mytodos", JSON.stringify(this.todoList));
  }


}
