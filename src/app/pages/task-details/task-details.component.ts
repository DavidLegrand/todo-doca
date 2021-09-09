import { TodolistService } from './../../services/todolist.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Task from 'src/app/models/task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  task!: Task;

  constructor(private route: ActivatedRoute, private tdlS: TodolistService) {}

  ngOnInit(): void {
    this.task = this.tdlS.getTaskById(Number(this.route.snapshot.paramMap.get('id')))
  }
}
