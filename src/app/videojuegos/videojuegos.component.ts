import { Component } from '@angular/core';

@Component({
  selector: 'videojuegos',
  templateUrl: './videojuegos.component.html'
})

export class VideojuegosComponent{
  public nombre:string;
  public juego:string;
  public juego_retro:string;
  public mostrar_juego_retro:boolean;
  public color2:string;
  public anio:number;

  public juegos:Array<string>;
  constructor(){
    this.nombre = 'Videojuegos 2018';
    this.juego = 'Halo2';
    this.juego_retro = "Mario 64";
    this.mostrar_juego_retro = false;
    this.color2 = "blue";
    this.anio = 2018;
    this.juegos = ['San Andreas', 'NFSMW', 'Call of duty', 'Fornite'];

  }
}
