import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pacman-pacgum',
  templateUrl: './pacgum.component.html',
  styleUrls: ['./pacgum.component.scss']
})
export class PacgumComponent implements OnInit {

  @Input()
  super: string;

  constructor() { }

  ngOnInit() {
  }

}
