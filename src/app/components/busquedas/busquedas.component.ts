import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
@Component({
  selector: 'app-busquedas',
  templateUrl: './busquedas.component.html',
})
export class BusquedasComponent implements OnInit {
  heroesOpc: Heroe[] = [];
  termino: string;
  constructor(private activateRoute: ActivatedRoute, private heroesService: HeroesService, private router: Router) {
    this.activateRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroesOpc = heroesService.buscarHeroes( this.termino );
    });
  }

  ngOnInit(): void {
  }
  verMas(nombre: number){
    this.router.navigate(['/heroe', nombre]);
  }
}
