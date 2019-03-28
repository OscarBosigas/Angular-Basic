import { Component } from '@angular/core';

@Component({
  selector: 'videojuegos',
  template: `
    <h2>Componente de: {{nombre}}</h2>

    <h3 [style.background]="'red'"
     *ngIf= "mostrar_juego_retro != true" >El mejor juego es: {{juego}}</h3>

    <h3 [style.background]="color2"
     *ngIf= "mostrar_juego_retro" >El mejor juego es: {{juego_retro}}</h3>
  `
})

export class VideojuegosComponent{
  public nombre = 'Videojuegos 2018';
  public juego = 'Halo2';
  public juego_retro = "Mario 64";
  public mostrar_juego_retro = false;
  public color2 = "blue";
}
