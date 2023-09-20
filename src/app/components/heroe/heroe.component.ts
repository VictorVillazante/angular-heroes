import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor( private heroesService: HeroesService, private router: Router
    ) {
    console.log('Constructor');
  }
  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }
  verMas(nombre: any){
    this.router.navigate(['/heroe', nombre]);
  }
}
