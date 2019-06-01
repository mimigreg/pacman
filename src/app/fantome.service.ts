import { Injectable } from '@angular/core';
import { Coordonees } from './models/coordonees.model';
import { CarteService } from './carte.service';
import { FantomeModel } from './models/fantome.model';

@Injectable({
  providedIn: 'root'
})
export class FantomeService {

  constructor(private carteService: CarteService) { }

  public choisiLaPlusCourteDirection(positionActuelle: Coordonees, cible: Coordonees, directionsPossible: Array<number>): number {
    if (directionsPossible.length === 1) {return directionsPossible[0]; }
    let possibiliteChoisie: number;
    let distanceChoisie: number;

    // Challenge les possiblités
    for (const possibilite of directionsPossible) {
      const challengeProjete = this.projetePosition(positionActuelle, possibilite);
      const distanceChallenge = Math.pow(challengeProjete.latitude - cible.latitude, 2) +
        Math.pow(challengeProjete.longitude - cible.longitude, 2);

      if (possibiliteChoisie === undefined) {
        possibiliteChoisie = possibilite;
        distanceChoisie = distanceChallenge;
      }
      if (distanceChallenge < distanceChoisie) {
        possibiliteChoisie = possibilite;
        distanceChoisie = distanceChallenge;
      }
    }
    return possibiliteChoisie;
  }

  public cacluleLeNombreDeCases(positionActuelle: Coordonees, cible: Coordonees, compte: number = 0): number {
    if (compte > 8) { return 9; }
    if (positionActuelle.latitude === cible.latitude && positionActuelle.longitude === cible.longitude) {
      return compte;
    } else {
      const directionsPossible = this.calculeDirectionsPossible(positionActuelle);
      return this.cacluleLeNombreDeCases(
        this.projetePosition(
          positionActuelle,
          this.choisiLaPlusCourteDirection(positionActuelle, cible, directionsPossible)
        ),
        cible,
        compte + 1
      );
    }
  }

  public calculeDirectionsPossible(position: Coordonees): Array<number> {
    const directions = [];
    for (const direction of [0, 90, 180, 270]) {
      if (Math.abs(position.direction - direction) !== 180) { // Pas le droit de faire demi tour
        if (!this.carteService.ilYaUnMur(this.projetePosition(position, direction))) { directions.push(direction); } // Pas de mur
      }
    }
    return directions;
  }

  public projetePosition(positionActuelle: Coordonees, expectedDirection: number, increment: number = 1): Coordonees {
    if (expectedDirection === 0) {
      return {
        latitude: positionActuelle.latitude - increment,
        longitude: positionActuelle.longitude,
        direction: expectedDirection,
        vitesse: positionActuelle.vitesse
      };
    }
    if (expectedDirection === 90) {
      return {
        latitude: positionActuelle.latitude,
        longitude: (positionActuelle.longitude + increment) > 27 ? 0 : positionActuelle.longitude + increment,
        direction: expectedDirection,
        vitesse: positionActuelle.vitesse
      };
    }
    if (expectedDirection === 180) {
      return {
        latitude: positionActuelle.latitude + increment,
        longitude: positionActuelle.longitude,
        direction: expectedDirection,
        vitesse: positionActuelle.vitesse
      };
    }
    if (expectedDirection === 270) {
      return {
        latitude: positionActuelle.latitude,
        longitude: (positionActuelle.longitude - increment < 0 ) ? 27 : positionActuelle.longitude - increment,
        direction: expectedDirection,
        vitesse: positionActuelle.vitesse
      };
    }
  }

  public chasseur(fantome: FantomeModel, pacman: Coordonees, ser: FantomeService, option?: Coordonees): number { // blinky
    let cible = fantome.coordoneesRode;
    if (fantome.poursuitMode === 1) {
      cible = pacman;
    }
    //    console.debug('rouge', cible);
    return ser.choisiLaPlusCourteDirection(fantome.coordonees, cible, ser.calculeDirectionsPossible(fantome.coordonees));
  }

  public piegeur(fantome: FantomeModel, pacman: Coordonees, ser: FantomeService, option?: Coordonees): number { // pinky
    let cible = fantome.coordoneesRode;
    if (fantome.poursuitMode === 1) {
      cible = ser.projetePosition(pacman, pacman.direction, 4);
    }
    //    console.debug('rose', cible);
    return ser.choisiLaPlusCourteDirection(fantome.coordonees, cible, ser.calculeDirectionsPossible(fantome.coordonees));
  }

  public timide(fantome: FantomeModel, pacman: Coordonees, ser: FantomeService, option?: Coordonees): number { // inky
    let cible = fantome.coordoneesRode;
    if (fantome.poursuitMode === 1) {
      const projetedPacman = ser.projetePosition(pacman, pacman.direction, 2);
      // option devrait etre les coordonees de blinky
      cible = {
        latitude: option.latitude + 2 * (projetedPacman.latitude - option.latitude),
        longitude: pacman.longitude + 2 * (projetedPacman.longitude - option.longitude)
      };
    }
//    console.debug('bleu', cible);
    return ser.choisiLaPlusCourteDirection(fantome.coordonees, cible, ser.calculeDirectionsPossible(fantome.coordonees));
  }

  public dedaignant(fantome: FantomeModel, pacman: Coordonees, ser: FantomeService, option?: Coordonees): number { // clyde
    let cible = fantome.coordoneesRode;
    if (fantome.poursuitMode === 1) {
      if (ser.cacluleLeNombreDeCases(fantome.coordonees, pacman) > 8) { cible = pacman; }
    }
//    console.debug('orange', cible);
    return ser.choisiLaPlusCourteDirection(fantome.coordonees, cible, ser.calculeDirectionsPossible(fantome.coordonees));
  }

}
