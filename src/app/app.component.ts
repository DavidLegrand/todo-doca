import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Mon application';
  toto: any;
  constructor() {
    setTimeout(() => (this.toto = { name: 'Toto' }), 5);
  }
}
