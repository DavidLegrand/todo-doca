import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  count: number = 0;
  title = 'Se connecter';
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
