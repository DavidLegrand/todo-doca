import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  name: string;
  complete: boolean;
  color='red'

  constructor() {
    this.name = 'Faire le ménage';
    this.complete = false;
  }
  getComplete(): string {
    return this.complete ? 'Terminée' : 'En cours';
  }
  ngOnInit(): void {}
}
