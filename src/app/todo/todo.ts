export interface ToDoItem {
    title: string;
    content: string;
    status: ToDoStatus;
}

export enum ToDoStatus {
    ToDo = 'To Do',
    Started = 'Started',
    Done = 'Done',
  }
