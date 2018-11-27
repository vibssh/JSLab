
import { Injectable } from '@angular/core';

import { Todo } from './todo';

@Injectable()
export class TodoService {
  todos: Todo[] = [
    {id: 1, title: 'one', complete: true},
    {id: 2, title: 'two', complete: false},
    {id: 3, title: 'one', complete: true}
  ];

  constructor() { }

  getAllTodos(): Todo[] {
    return this.todos;
  }

}
