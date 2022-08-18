import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  todos: Todo[];
  @Input() todo: Todo;
  @Input() labelIndex : number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();  // creating custom event
  @Output() todoComplete: EventEmitter<Todo> = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  onDelete(todo:Todo){
    this.todoDelete.emit(todo);
    // console.log("Delete button clicked"); 
  };
  onComplete(todo:Todo){
    // console.log("Todo complete clicked", todo);
    this.todoComplete.emit(todo);
  }
  
}
