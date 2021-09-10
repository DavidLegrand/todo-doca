import { UserService } from './../../services/user.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import User from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  title = 'Utilisateurs';
  users!: Array<User>;
  subscription: Subscription = new Subscription();

  constructor(private uS: UserService) {}

  trackByMail(index: number, user: User): string {
    return user.email;
  }
  
  ngOnInit(): void {
    this.subscription = this.uS.usersSubject.subscribe(
      (users) => (this.users = users)
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
