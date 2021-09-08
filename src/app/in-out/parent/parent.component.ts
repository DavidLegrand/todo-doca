import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  villes: Array<string> = ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Nantes'];
  ordres: Array<string> = [
    'premier',
    'second',
    'troisième',
    'quatrième',
    'cinquième',
  ];
  somme: number = 0;
  moyenne: number = 0;
  nb: number = 0;

  calculMoyenne(noteRecue: number): void {
    this.somme += noteRecue;
    this.nb++;
    this.moyenne = this.somme / this.nb;
  }

  constructor() {}

  ngOnInit(): void {}
}
