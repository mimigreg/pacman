import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pacman-labyrinthe',
  templateUrl: './labyrinthe.component.html',
  styleUrls: ['./labyrinthe.component.scss']
})
export class LabyrintheComponent implements OnInit {

  tiles: Array<Array<string>>;

  constructor() {
  }

// tslint:disable: max-line-length
ngOnInit() {
    this.tiles = [
      ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['BD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'BG', 'BD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'BG'],
      ['HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB'],
      ['HB', 'PN', 'BD', 'GD', 'GD', 'BG', 'PN', 'BD', 'GD', 'GD', 'GD', 'BG', 'PN', 'HB', 'HB', 'PN', 'BD', 'GD', 'GD', 'GD', 'BG', 'PN', 'BD', 'GD', 'GD', 'BG', 'PN', 'HB'],
      ['HB', 'PS', 'HB', '  ', '  ', 'HB', 'PN', 'HB', '  ', '  ', '  ', 'HB', 'PN', 'HB', 'HB', 'PN', 'HB', '  ', '  ', '  ', 'HB', 'PN', 'HB', '  ', '  ', 'HB', 'PS', 'HB'],
      ['HB', 'PN', 'HD', 'GD', 'GD', 'HG', 'PN', 'HD', 'GD', 'GD', 'GD', 'HG', 'PN', 'HD', 'HG', 'PN', 'HD', 'GD', 'GD', 'GD', 'HG', 'PN', 'HD', 'GD', 'GD', 'HG', 'PN', 'HB'],
      ['HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB'],
      ['HB', 'PN', 'BD', 'GD', 'GD', 'BG', 'PN', 'BD', 'BG', 'PN', 'BD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'BG', 'PN', 'BD', 'BG', 'PN', 'BD', 'GD', 'GD', 'BG', 'PN', 'HB'],
      ['HB', 'PN', 'HD', 'GD', 'GD', 'HG', 'PN', 'HB', 'HB', 'PN', 'HD', 'GD', 'GD', 'BG', 'BD', 'GD', 'GD', 'HG', 'PN', 'HB', 'HB', 'PN', 'HD', 'GD', 'GD', 'HG', 'PN', 'HB'],
      ['HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB'],
      ['HD', 'GD', 'GD', 'GD', 'GD', 'BG', 'PN', 'HB', 'HD', 'GD', 'GD', 'BG', '  ', 'HB', 'HB', '  ', 'BD', 'GD', 'GD', 'HG', 'HB', 'PN', 'BD', 'GD', 'GD', 'GD', 'GD', 'HG'],
      ['  ', '  ', '  ', '  ', '  ', 'HB', 'PN', 'HB', 'BD', 'GD', 'GD', 'HG', '  ', 'HD', 'HG', '  ', 'HD', 'GD', 'GD', 'BG', 'HB', 'PN', 'HB', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', 'HB', 'PN', 'HB', 'HB', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', 'HB', 'HB', 'PN', 'HB', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', 'HB', 'PN', 'HB', 'HB', '  ', 'BD', 'GD', 'GD', 'WW', 'WW', 'GD', 'GD', 'BG', '  ', 'HB', 'HB', 'PN', 'HD', 'GD', 'GD', 'GD', 'GD', 'GD'],
      ['GD', 'GD', 'GD', 'GD', 'GD', 'HG', 'PN', 'HD', 'HG', '  ', 'HB', '  ', '  ', '  ', '  ', '  ', '  ', 'HB', '  ', 'HD', 'HG', 'PN', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', 'PN', '  ', '  ', '  ', 'HB', '  ', '  ', '  ', '  ', '  ', '  ', 'HB', '  ', '  ', '  ', 'PN', '  ', '  ', '  ', '  ', '  ', '  '],
      ['GD', 'GD', 'GD', 'GD', 'GD', 'BG', 'PN', 'BD', 'BG', '  ', 'HB', '  ', '  ', '  ', '  ', '  ', '  ', 'HB', '  ', 'BD', 'BG', 'PN', 'BD', 'GD', 'GD', 'GD', 'GD', 'GD'],
      ['  ', '  ', '  ', '  ', '  ', 'HB', 'PN', 'HB', 'HB', '  ', 'HD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'HG', '  ', 'HB', 'HB', 'PN', 'HB', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', 'HB', 'PN', 'HB', 'HB', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', 'HB', 'HB', 'PN', 'HB', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', 'HB', 'PN', 'HB', 'HB', '  ', 'BD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'BG', '  ', 'HB', 'HB', 'PN', 'HB', '  ', '  ', '  ', '  ', '  '],
      ['BD', 'GD', 'GD', 'GD', 'GD', 'HG', 'PN', 'HD', 'HG', '  ', 'HD', 'GD', 'GD', 'BG', 'BD', 'GD', 'GD', 'HG', '  ', 'HD', 'HG', 'PN', 'HD', 'GD', 'GD', 'GD', 'GD', 'BG'],
      ['HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB'],
      ['HB', 'PN', 'BD', 'GD', 'GD', 'BG', 'PN', 'BD', 'GD', 'GD', 'GD', 'BG', 'PN', 'HB', 'HB', 'PN', 'BD', 'GD', 'GD', 'GD', 'BG', 'PN', 'BD', 'GD', 'GD', 'BG', 'PN', 'HB'],
      ['HB', 'PN', 'HD', 'GD', 'BG', 'HB', 'PN', 'HD', 'GD', 'GD', 'GD', 'HG', 'PN', 'HD', 'HG', 'PN', 'HD', 'GD', 'GD', 'GD', 'HG', 'PN', 'HB', 'BD', 'GD', 'HG', 'PN', 'HB'],
      ['HB', 'PS', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', '  ', '  ', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PS', 'HB'],
      ['HD', 'GD', 'BG', 'PN', 'HB', 'HB', 'PN', 'BD', 'BG', 'PN', 'BD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'BG', 'PN', 'BD', 'BG', 'PN', 'HB', 'HB', 'PN', 'BD', 'GD', 'HG'],
      ['BD', 'GD', 'HG', 'PN', 'HD', 'HG', 'PN', 'HB', 'HB', 'PN', 'HD', 'GD', 'GD', 'BG', 'BD', 'GD', 'GD', 'HG', 'PN', 'HB', 'HB', 'PN', 'HD', 'HG', 'PN', 'HD', 'GD', 'BG'],
      ['HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PN', 'PN', 'HB', 'HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB'],
      ['HB', 'PN', 'BD', 'GD', 'GD', 'GD', 'GD', 'HG', 'HD', 'GD', 'GD', 'BG', 'PN', 'HB', 'HB', 'PN', 'BD', 'GD', 'GD', 'HG', 'HD', 'GD', 'GD', 'GD', 'GD', 'BG', 'PN', 'HB'],
      ['HB', 'PN', 'HD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'HG', 'PN', 'HD', 'HG', 'PN', 'HD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'HG', 'PN', 'HB'],
      ['HB', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'PN', 'HB'],
      ['HD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'GD', 'HG'],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
      ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ', '  ']
    ];
  }

}
