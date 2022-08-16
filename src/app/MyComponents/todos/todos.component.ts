import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "This is title1",
        desc: "Description1",
        active: true
      },
      {
        sno: 2,
        title: "This is title2",
        desc: "Description2",
        active: false
      },
      {
        sno: 3,
        title: "This is title3",
        desc: "Description3",
        active: true
      }
    ]
   }

  ngOnInit(): void {
  }

  onDeleteTodo(todo:Todo){
    // console.log(todo);
    const index:number = this.todos.indexOf(todo);
    if(index > -1){
      this.todos.splice(index, 1);
      console.log(this.todos);
    }

  };
  onAddTodo(todo:Todo){
    // console.log(todo);
    this.todos.push(todo);

  };
}
