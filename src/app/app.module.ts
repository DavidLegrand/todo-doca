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

@NgModule({
  declarations: [AppComponent, TaskComponent, TodolistComponent, NavComponent, LoginComponent, LogoutComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
