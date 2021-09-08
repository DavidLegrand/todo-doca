import { Component } from '@angular/core';
import Task from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Mon application';
  tasks?: Promise<Array<Task>>;

  trackById(index: number, task: Task): number {
    return task.id;
  }
  constructor() {
    setTimeout(
      () =>
        this.tasks = Promise.resolve([
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
        ]),
      2000
    );
  }
}
