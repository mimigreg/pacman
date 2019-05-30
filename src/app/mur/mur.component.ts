import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pacman-mur',
  templateUrl: './mur.component.html',
  styleUrls: ['./mur.component.scss']
})
export class MurComponent implements OnInit {

  @Input()
  direction: string;

  constructor() { }

  ngOnInit() {
  }

}
