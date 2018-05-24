import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {BuscarComponent} from './components/buscar/buscar.component';
import {PeliculasComponent} from './components/peliculas/peliculas.component';
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'buscar/:termino', component: BuscarComponent },
  { path: 'peliculas/:id/:pagina',component: PeliculasComponent  },
  { path: 'peliculas/:id/:pagina/:busqueda',component: PeliculasComponent  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
