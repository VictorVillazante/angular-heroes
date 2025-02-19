import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from 'src/app/models/Heroe';
@Component({
  selector: 'app-busquedas',
  templateUrl: './busquedas.component.html',
  styleUrls: ['./busquedas.component.css']
})
export class BusquedasComponent{
  heroesOpc: Heroe[] = [];
  termino: string | undefined;
  constructor(private activateRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) {
    this.activateRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroesOpc = heroesService.buscarHeroes( this.termino ?? "" );
    });
  }
  verMas(nombre: string){
    this.router.navigate(['/heroe', nombre]);
  }
}
