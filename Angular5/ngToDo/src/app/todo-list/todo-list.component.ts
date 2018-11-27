import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo';

import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  // tslint:disable-next-line:no-trailing-whitespace
  todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getAllTodos();
   }
}
