import { TodolistService } from './../../services/todolist.service';
import { Component, Input, OnInit } from '@angular/core';
import Task from 'src/app/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  editMode: boolean = false;
  deleteMode: boolean = false;

  constructor(private tdlS: TodolistService) {}

  getComplete(): string {
    return this.task?.completed ? 'Terminée' : 'En cours';
  }
  toggleComplete(): void {
    this.task.completed = !this.task.completed;
  }
  toggleEditMode(): void {
    if (this.task.title) this.editMode = !this.editMode;
  }
  toggleDeleteMode(): void {
    this.deleteMode = !this.deleteMode;
  }
  getButtonText(): string {
    return this.task.completed ? 'Annuler' : 'Terminer';
  }
  deleteTask(): void {
    this.tdlS.deleteTask(this.task.id);
  }
  ngOnInit(): void {}
}
