import { Injectable } from '@angular/core';
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
  tasks!: Array<Task>;
  constructor() {
    this.updateTasks(initialList);
  }
  updateTasks(newTasks: Array<Task>) {
    this.tasks = newTasks;
  }
}
