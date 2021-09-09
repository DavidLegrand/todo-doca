import { TodolistService } from './../../services/todolist.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import Task from 'src/app/models/task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit, OnDestroy {
  task!: Task;
  subscription!: Subscription;
  constructor(private route: ActivatedRoute, private tdlS: TodolistService) {}

  ngOnInit(): void {
    /* Méthode snapshots */
    // this.task = this.tdlS.getTaskById(
    //   Number(this.route.snapshot.paramMap.get('id'))
    // );
    
    /* Méthode observables */
    this.subscription = this.route.paramMap.subscribe(
      (params: Params) =>
        (this.task = this.tdlS.getTaskById(Number(params.get('id'))))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
