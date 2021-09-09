import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../../services/todolist.service';
import Task from '../../models/task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  trackById(index: number, task: Task): number {
    return task.id;
  }
  constructor(public tdlS: TodolistService) {}

  ngOnInit(): void {}
}
