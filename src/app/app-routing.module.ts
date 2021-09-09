import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TodolistComponent } from './pages/todolist/todolist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: { title: 'Accueil' },
  },
  { path: 'login', component: LoginComponent, data: { title: 'Se connecter' } },
  {
    path: 'todolist',
    pathMatch: 'full',
    component: TodolistComponent,
    data: { title: 'To Do List' },
  },
  {
    path: 'todolist/:id',
    component: TaskDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
