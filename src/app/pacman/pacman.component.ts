import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pacman-pacman',
  templateUrl: './pacman.component.html',
  styleUrls: ['./pacman.component.scss']
})
export class PacmanComponent implements OnInit {

@Input()
direction: string;

  constructor() { }

  ngOnInit() {
  }

}
