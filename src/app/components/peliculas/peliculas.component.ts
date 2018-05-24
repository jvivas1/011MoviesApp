import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styles: []
})
export class PeliculasComponent implements OnInit {
  pelicula:any[]=[];
  termino:string;
  pagina:string;
  busqueda:string;
  constructor(private peliculaS:PeliculasService,
    private activatedRoute:ActivatedRoute
    ,private router:Router ) {

     }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.pagina=params['pagina'];
      if(params['busqueda'])
      {
        this.busqueda=params['busqueda'];
      }
      this.peliculaS.getPelicula(params['id']).subscribe(resultados=>{
        this.pelicula=resultados;
      });

    })
  }

}
