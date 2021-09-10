import { TaskFormComponent } from './pages/task-form/task-form.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TodolistComponent } from './pages/todolist/todolist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'Se connecter' } },
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        data: { title: 'Accueil' },
      },
      {
        path: 'todolist',
        pathMatch: 'full',
        component: TodolistComponent,
        data: { title: 'To Do List' },
      },
      {
        path: 'todolist/add',
        component: TaskFormComponent,
      },
      {
        path: 'todolist/:id',
        component: TaskDetailsComponent,
      },
    ],
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
