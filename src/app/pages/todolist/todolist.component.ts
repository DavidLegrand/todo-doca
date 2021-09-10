import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodolistService } from '../../services/todolist.service';
import Task from '../../models/task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit, OnDestroy {
  title = 'To Do List';
  tasks: Array<Task> = [];
  subcription: Subscription = new Subscription();

  trackById(index: number, task: Task): number {
    return task.id;
  }
  constructor(public tdlS: TodolistService) {}

  ngOnInit(): void {
    this.subcription = this.tdlS.todolistSubject.subscribe(
      (tasks: Array<Task>) => this.tasks = tasks
    );
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
