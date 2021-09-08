import { Component } from '@angular/core';
import Task from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Mon application';
  tasks: Array<Task>;

  trackById(index: number, task: Task): number {
    return task.id;
  }
  constructor() {
    this.tasks = [
      {
        id: 0,
        title: 'Faire les courses',
        completed: true,
        description: "Acheter des oeufs, et de l'huile",
      },
      {
        id: 1,
        title: 'Faire la vaisselle',
        completed: false,
        description: 'Penser à bien récurer le plat',
      },
      {
        id: 2,
        title: 'Jeter les poubelles',
        completed: false,
        description: 'Les éboueurs passent demain matin !!',
      },
    ];
  }
}
