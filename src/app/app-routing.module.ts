import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { TodosComponent } from './MyComponents/todos/todos.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'add-todo', component: AddTodoComponent },
  { path: 'todo-list', component: TodoItemComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
