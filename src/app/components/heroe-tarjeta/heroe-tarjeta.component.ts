import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  @Output() heroeSeleccionado: EventEmitter <string>; // observador
  constructor( private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }
  verMas(nombre: string){
    // this.router.navigate(['/heroe', nombre]);
    this.heroeSeleccionado.emit(nombre);
  }
}
