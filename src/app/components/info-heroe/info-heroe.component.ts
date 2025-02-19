import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from 'src/app/models/Heroe';
@Component({
  selector: 'app-info-heroe',
  templateUrl: './info-heroe.component.html',
  styleUrls: ['./info-heroe.component.css']
})
export class InfoHeroeComponent {
  heroe: Heroe | undefined;
  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroesService.getHeroe( params['id'] );
    });
  }
}
