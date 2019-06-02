import { Coordonees } from './coordonees.model';
import { FantomeService } from '../fantome.service';

export class FantomeModel {
  couleur: string;
  coordonees: Coordonees;
  coordoneesRode: Coordonees;
  poursuitMode: number;
  libreDeSortir: boolean;

  constructor(
    couleur: string,
    coordoneesInitiale: Coordonees,
    coordoneesRode: Coordonees,
    carractere: (fantome: FantomeModel, pacman: Coordonees, ser: FantomeService, option?: Coordonees) => number
  ) {
    this.couleur = couleur;
    this.coordonees = coordoneesInitiale;
    this.coordoneesRode = coordoneesRode;
    this.poursuitMode = 0; // 0 = rode, 1 = poursuite, -1 = panique
    this.libreDeSortir = false;
    this.calculNextDirection = carractere;
  }

  calculNextDirection(fantome: FantomeModel, pacman: Coordonees, ser: FantomeService, option?: Coordonees): number {
    throw new Error('Pas de caractère défini');
  }
}
