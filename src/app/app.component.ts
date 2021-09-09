import { TodolistService } from './services/todolist.service';
import { Component } from '@angular/core';
import Task from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Mon application';
  tasks?: Array<Task>;

  trackById(index: number, task: Task): number {
    return task.id;
  }
  constructor(public tdlS: TodolistService) {
    this.tasks = this.tdlS.tasks;
  }
}
