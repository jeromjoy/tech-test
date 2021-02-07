import { Component, OnInit } from '@angular/core';
import { ToDoItem, ToDoStatus } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  toDoStatus = ToDoStatus;

  title = 'To Do';
  itemTitle = '';
  itemContent = '';
  todoItems: ToDoItem[] = [

    {
      title: 'Hi',
      content: 'Welcome to your tasks',
      status: ToDoStatus.ToDo
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

  save(): void {
    this.todoItems.push({
      title: this.itemTitle,
      content: this.itemContent,
      status: ToDoStatus.ToDo
    });
    this.itemTitle = '';
    this.itemContent = '';
  }

  delete(i: number): void {
    this.todoItems.splice(i, 1);
  }

  getToDoIcon(status: ToDoStatus): string {
    let icon = '';
    switch (status) {
      case ToDoStatus.ToDo: icon = 'assignment'; break;
      case ToDoStatus.Started: icon = 'schedule'; break;
      case ToDoStatus.Done: icon = 'check_circle'; break;
      default: icon = '';
    }
    return icon;
  }

  showButtons(status: ToDoStatus): boolean {
    return (status === ToDoStatus.ToDo) || (status === ToDoStatus.Started);
  }

  updateStatus(item: ToDoItem, status: ToDoStatus): void {
    item.status = status;
  }
}
