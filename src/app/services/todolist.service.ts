import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import Task from '../models/task';

const initialList: Array<Task> = [
  {
    id: 0,
    title: 'Faire les courses',
    completed: true,
    description: "Acheter des oeufs, et de l'huile",
    created: new Date('01/01/2021 09:00'),
  },
  {
    id: 1,
    title: 'Faire la vaisselle',
    completed: false,
    description: 'Penser à bien récurer le plat',
    created: new Date('05/06/2021 19:30'),
  },
  {
    id: 2,
    title: 'Jeter les poubelles',
    completed: false,
    description: 'Les éboueurs passent demain matin !!',
  },
];

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  private tasks!: Array<Task>;
  todolistSubject: BehaviorSubject<Array<Task>>;

  constructor() {
    this.todolistSubject = new BehaviorSubject(initialList);
    this.updateTasks(initialList);
  }

  getNewId(): number {
    return (
      this.tasks.reduce((prevTask, currTask) =>
        prevTask.id > currTask.id ? prevTask : currTask
      ).id + 1
    );
  }

  addTask(formTask: {
    title: string;
    completed: boolean;
    description?: string;
  }) {
    const newTask = formTask as Task;
    newTask.id = this.getNewId();
    newTask.created = new Date();
    this.updateTasks([...this.tasks, newTask]);
  }

  updateTasks(newTasks: Array<Task>) {
    this.tasks = newTasks;
    this.emit();
  }

  deleteTask(id: number) {
    this.updateTasks(this.tasks.filter((task) => task.id !== id));
  }

  getTaskById(id: number): Task {
    return this.tasks.filter((task) => task.id === id)[0];
  }

  emit(): void {
    this.todolistSubject.next(this.tasks);
  }
}
