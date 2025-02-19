import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/models/Heroe';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent{
  @Input() heroe: Heroe | undefined;
  @Output() heroeSeleccionado: EventEmitter <string>;
  constructor() {
    this.heroeSeleccionado = new EventEmitter();
  }
  verMas(nombre: string){
    this.heroeSeleccionado.emit(nombre);
  }
}
