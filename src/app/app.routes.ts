import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { AboutComponent } from './components/about/about.component';
import { InfoHeroeComponent } from './components/info-heroe/info-heroe.component';
import { BusquedasComponent } from './components/busquedas/busquedas.component';
const APP_ROUTES: Routes  = [
    { path: 'home', component: HomeComponent},
    { path: 'heroes', component: HeroeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'busqueda/:termino', component: BusquedasComponent },
    { path: 'heroe/:id', component: InfoHeroeComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', redirectTo: 'home'}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
