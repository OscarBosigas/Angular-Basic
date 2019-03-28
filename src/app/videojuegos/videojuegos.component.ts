import { Component } from '@angular/core';

@Component({
  selector: 'videojuegos',
  template: `
    <h2>Componente de: {{nombre}}</h2>
    <h3>El mejor juego es: {{juego}}</h3>
  `
})

export class VideojuegosComponent{
  public nombre = 'Videojuegos 2018';
  public juego = 'Halo2';
}
