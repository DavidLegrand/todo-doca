import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import User from 'src/app/models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private us: UserService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      team: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.us.addUser(this.userForm.value as User);
    this.router.navigate(['/users']);
  }
  ngOnInit(): void {}
}
