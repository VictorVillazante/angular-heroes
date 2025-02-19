import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/models/Heroe';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor( private heroesService: HeroesService, private router: Router
    ) {
  }
  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }
  verMas(nombre: string){
    this.router.navigate(['/heroe', nombre]);
  }
}
