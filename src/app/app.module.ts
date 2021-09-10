import { NgModule } from '@angular/core';
import '@angular/common/locales/fr'

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TodolistComponent } from './pages/todolist/todolist.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { HomeComponent } from './pages/home/home.component';
import { H1Component } from './components/h1/h1.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ObservableComponent } from './observable/observable.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { TaskFormComponent } from './pages/task-form/task-form.component';

@NgModule({
  declarations: [AppComponent, TaskComponent, TodolistComponent, NavComponent, LoginComponent, LogoutComponent, HomeComponent, H1Component, TaskDetailsComponent, NotFoundComponent, ObservableComponent, LifecycleComponent, TaskFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
