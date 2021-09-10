import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import User from '../models/user.model';

const initialList = [
  new User('David', 'Legrand', 'contact@david-legrand.com', 'admin', [
    'Angular',
    'JS',
    'React',
  ]),
];
@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: Array<User> = [];
  usersSubject: BehaviorSubject<Array<User>>;

  constructor() {
    this.users = initialList;
    this.usersSubject = new BehaviorSubject(initialList);
  }

  addUser(newUser: User) {
    this.users.push(newUser);
    this.emit();
  }
  emit() {
    this.usersSubject.next(this.users);
  }
}
