import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pacman-fantome',
  templateUrl: './fantome.component.html',
  styleUrls: ['./fantome.component.scss']
})
export class FantomeComponent implements OnInit {

  @Input()
  couleur: string;

  constructor() { }

  ngOnInit() {
  }

}
