import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem:string | any;
  todos: Todo[];
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null){
      this.todos = []
    }
    else{
      this.todos = JSON.parse(this.localItem);
    };
   }

  ngOnInit(): void {
  }

  onDeleteTodo(todo:Todo){
    // console.log(todo);
    const index:number = this.todos.indexOf(todo);
    if(index > -1){
      this.todos.splice(index, 1);
      console.log(this.todos);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    };
  };
  onAddTodo(todo:Todo){
    // console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  };
  onCompleteTodo(todo:Todo){
    const index: number = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    // console.log("Index of completed todo is :", index);
  };

}
