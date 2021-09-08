import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  name: string;
  complete: boolean;

  user: any;

  constructor() {
    this.name = 'Faire le ménage';
    this.complete = true;
    setTimeout(()=> this.user = { name: 'David' }, 2000)
  }
  getComplete(): string {
    return this.complete ? 'Terminée' : 'En cours';
  }
  toggleComplete(): void {
    this.complete = !this.complete;
  }
  getButtonText(): string {
    return this.complete ? 'Annuler' : 'Terminer';
  }
  ngOnInit(): void {}
}
