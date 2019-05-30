import { Component } from '@angular/core';
import { FantomeModel } from './models/fantome.model';

@Component({
  selector: 'pacman-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pacman';
  fantomes: Array<FantomeModel>;

  constructor() {
    this.fantomes = [
      {couleur: '#FF0000', x: 0, y: 0},
      {couleur: '#00FFFF', x: 0, y: 0},
      {couleur: '#FFCCCC', x: 0, y: 0},
      {couleur: '#FFBB00', x: 0, y: 0}
    ];
  }
}
