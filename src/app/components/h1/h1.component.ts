import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-h1',
  templateUrl: './h1.component.html',
  styleUrls: ['./h1.component.css'],
})
export class H1Component implements OnInit {
  @Input() title!: string;
  constructor() {}

  ngOnInit(): void {}
}
