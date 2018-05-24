import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule,JsonpModule} from '@angular/http';
import { AppComponent } from './app.component';

import {APP_ROUTING} from './app.routes';

//Servicios
import {PeliculasService} from './services/peliculas.service';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PeliculaimagenPipe } from './pipes/peliculaimagen.pipe';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscarComponent,
    PeliculaimagenPipe,
    PeliculasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    APP_ROUTING
    ,NgbModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
