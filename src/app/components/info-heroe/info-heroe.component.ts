import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-info-heroe',
  templateUrl: './info-heroe.component.html',
})
export class InfoHeroeComponent {
  heroe: any = {};
  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroesService.getHeroe( params['id'] );
    }); // observador pendiente de los cambios donde se tiene que suscribir
    console.log(this.heroe);
  }
}
