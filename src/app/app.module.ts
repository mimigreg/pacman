import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PacmanComponent } from './pacman/pacman.component';
import { FantomeComponent } from './fantome/fantome.component';
import { PacgumComponent } from './pacgum/pacgum.component';
import { LabyrintheComponent } from './labyrinthe/labyrinthe.component';
import { MurComponent } from './mur/mur.component';

@NgModule({
  declarations: [
    AppComponent,
    PacmanComponent,
    FantomeComponent,
    PacgumComponent,
    LabyrintheComponent,
    MurComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
