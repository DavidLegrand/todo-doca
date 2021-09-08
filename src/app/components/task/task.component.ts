import { Component, Input, OnInit } from '@angular/core';
import Task from 'src/app/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;

  constructor() {}
  
  getComplete(): string {
    return this.task?.completed ? 'Terminée' : 'En cours';
  }
  toggleComplete(): void {
    this.task.completed = !this.task.completed;
  }
  getButtonText(): string {
    return this.task.completed ? 'Annuler' : 'Terminer';
  }
  ngOnInit(): void {}
}
