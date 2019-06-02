import { Component, HostListener, OnInit } from '@angular/core';
import { FantomeModel } from './models/fantome.model';
import { Coordonees } from './models/coordonees.model';
import { FantomeService } from './fantome.service';
import { CarteService } from './carte.service';
import { of, timer, Subscription } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'pacman-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pacman';
  nbPacgumMangee: number;
  fantomes: Array<FantomeModel>;
  pacman: Coordonees;
  blinky: FantomeModel;
  pinky: FantomeModel;
  inky: FantomeModel;
  clyde: FantomeModel;
  modeSubscription: Subscription;

  constructor(private fantomeService: FantomeService, private carteService: CarteService) {
    this.blinky = new FantomeModel (
      '#FF0000',
      {direction: 720, latitude: 11, longitude: 13, vitesse: 10},
      {latitude: -3, longitude: 25},
      this.fantomeService.chasseur
    );
    this.pinky = new FantomeModel (
      '#FFCCCC',
      {direction: 0, latitude: 13, longitude: 13, vitesse: 10},
      {latitude: -3, longitude: 2},
      this.fantomeService.piegeur
    );
    this.inky = new FantomeModel (
      '#00FFFF',
      {direction: 720, latitude: 14, longitude: 11, vitesse: 10},
      {latitude: 32, longitude: 27},
      this.fantomeService.timide
    );
    this.clyde = new FantomeModel (
      '#FFBB00',
      {direction: 720, latitude: 14, longitude: 15, vitesse: 10},
      {latitude: 32, longitude: 0},
      this.fantomeService.dedaignant
    );
    this.fantomes = [this.blinky, this.pinky, this. inky, this.clyde];
    this.pacman = {direction: 90, latitude: 23, longitude: 13};
    this.nbPacgumMangee = 0;
  }

  ngOnInit() {
    // Calcul du mouvement des fantomes
    timer(0, 200).subscribe(() => {
      for (const fantome of this.fantomes) {
        fantome.coordonees = this.fantomeService.projetePosition(
          fantome.coordonees,
          fantome.calculNextDirection(fantome, this.pacman, this.fantomeService, this.blinky.coordonees)
        );
      }
    });
    this.activeLeChangementDeMode();
  }

  reinitialise() {
    this.blinky.coordonees = {direction: 720, latitude: 11, longitude: 13, vitesse: 10};
    this.pinky.coordonees = {direction: 0, latitude: 13, longitude: 13, vitesse: 10};
    this.inky.coordonees = {direction: 720, latitude: 14, longitude: 11, vitesse: 10};
    this.clyde.coordonees = {direction: 720, latitude: 14, longitude: 15, vitesse: 10};
    this.inky.libreDeSortir = false;
    this.clyde.libreDeSortir = false;
    this.pacman = {direction: 90, latitude: 23, longitude: 13};
    this.nbPacgumMangee = 0;
  }

  activeLeChangementDeMode() {
    // Changement de mode rode/poursuite
    this.modeSubscription = of(7000, 20000, 7000, 20000, 5000, 20000, 5000).pipe(
      concatMap(val => of('change').pipe(delay(val)))
    ).subscribe((val) => {
      for (const fantome of this.fantomes) {
        fantome.poursuitMode = fantome.poursuitMode ? 0 : 1 ;
        fantome.coordonees.direction = this.fantomeService.directionOpposee(fantome.coordonees.direction);
      }
    });
    this.pinky.libreDeSortir = true;
  }

  logicalToAbsolute(logical: Coordonees): Coordonees {
    return {
      direction: logical.direction,
      latitude: (16 * (logical.latitude)) - 6,
      longitude: (16 * (logical.longitude)) - 6,
      vitesse: logical.vitesse
    };
  }

  @HostListener('window:keydown', ['$event'])
  deplacePacMan(keyEvent: KeyboardEvent) {
    if (keyEvent.key === 'ArrowUp') {this.pacman.direction = 0; }
    if (keyEvent.key === 'ArrowDown') {this.pacman.direction = 180; }
    if (keyEvent.key === 'ArrowLeft') {this.pacman.direction = 270; }
    if (keyEvent.key === 'ArrowRight') {this.pacman.direction = 90; }
    const positionCandidate = this.fantomeService.projetePosition(this.pacman, this.pacman.direction);
    if (!this.carteService.ilYaUnMur(positionCandidate)) {
      this.pacman = positionCandidate;
      if (this.carteService.ilYaUnePacgum(positionCandidate)) {
        this.carteService.videUneCase(positionCandidate);
        this.nbPacgumMangee ++;
        if (this.nbPacgumMangee > 30) {this.inky.libreDeSortir = true; }
        if (this.nbPacgumMangee > 81) {this.clyde.libreDeSortir = true; }
        if (this.nbPacgumMangee === 244) { // Gangné !
          this.carteService.reinitialise();
          this.reinitialise();
        }
      }
      if (this.carteService.ilYaUneSuperPacgum(positionCandidate)) {
        this.carteService.videUneCase(positionCandidate);
        this.nbPacgumMangee ++;
        if (this.nbPacgumMangee > 30) {this.inky.libreDeSortir = true; }
        if (this.nbPacgumMangee > 81) {this.clyde.libreDeSortir = true; }
        if (this.nbPacgumMangee === 244) { // Gangné !
          this.carteService.reinitialise();
          this.reinitialise();
        }
        for (const fantome of this.fantomes) {
          fantome.poursuitMode = -1 ;
          fantome.coordonees.direction = this.fantomeService.directionOpposee(fantome.coordonees.direction);
          this.modeSubscription.unsubscribe();
          this.activeLeChangementDeMode();
        }
      }
    }
  }
}
