import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { AboutComponent } from './components/about/about.component';
import { BusquedasComponent } from './components/busquedas/busquedas.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HomeComponent } from './components/home/home.component';
import { InfoHeroeComponent } from './components/info-heroe/info-heroe.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeroesService } from './services/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroeComponent,
    AboutComponent,
    InfoHeroeComponent,
    BusquedasComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
