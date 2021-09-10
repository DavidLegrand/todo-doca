import { TodolistService } from './../../services/todolist.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  constructor(private router: Router, private tdlS: TodolistService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    this.tdlS.addTask(form.value)
    this.router.navigate(['/todolist'])
  }
}
