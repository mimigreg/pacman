import { Component, OnInit } from '@angular/core';
import { CarteService } from '../carte.service';

@Component({
  selector: 'pacman-labyrinthe',
  templateUrl: './labyrinthe.component.html',
  styleUrls: ['./labyrinthe.component.scss']
})
export class LabyrintheComponent implements OnInit {

  tiles: Array<Array<string>>;

  constructor(private carteService: CarteService) {
  }

  // tslint:disable: max-line-length
  ngOnInit() {
    this.tiles = this.carteService.donneLaCarteTotale();
  }
}
