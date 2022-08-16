import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import * as uuid from "uuid";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todoTitle: string;
  todoDescription: string;
  todoActive: boolean;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo= {
      sno : uuid.v4(),
      title : this.todoTitle,
      desc : this.todoDescription,
      active : this.todoActive
    }
    this.todoAdd.emit(todo);
  }
}
