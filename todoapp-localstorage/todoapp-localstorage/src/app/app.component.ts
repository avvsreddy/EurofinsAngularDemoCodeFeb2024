import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITodo } from './models/todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  ngOnInit(): void {
  const todos = localStorage.getItem('todos')
  if(todos)
    this.todoList = JSON.parse(todos);

  //alert('on init')
  console.log(this.todoList);
}
 
 
todoList:ITodo[] = [];

addTodo(todo:string){
   const todoItem:ITodo =
  {
     id:this.todoList.length+1,
     todoText:todo,
     isCompleted:false,
   }
   this.todoList.push(todoItem);
   localStorage.setItem('todos', JSON.stringify(this.todoList));
   

}

todoChanged(index:number) {
  

  const todos = localStorage.getItem('todos')
  if(todos){
    this.todoList = JSON.parse(todos);
    this.todoList[index].isCompleted = !this.todoList[index].isCompleted;
    localStorage.setItem('todos', JSON.stringify(this.todoList));

  
  }
  }


}
