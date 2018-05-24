import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  peliculas:any[]=[];
  termino:string;
  constructor(private peliculaS:PeliculasService,
    private activatedRoute:ActivatedRoute
    ,private router:Router ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.peliculaS.buscarPelicula(params['termino']).subscribe(resultados=>{
        this.termino=params['termino'];

        this.peliculas=resultados.results;
      });

    })
  }

  busqueda(texto:string){
    this.peliculaS.buscarPelicula(texto).subscribe(resultados=>{
        this.peliculas=resultados.results;

    })
  }

  verPelicula(id:string){
  }

}
