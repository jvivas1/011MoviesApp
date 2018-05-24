import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

    peliculasPopulares:any[]=[];
    peliculasPopularesNinos:any[]=[];
    peliculasCartelera:any[]=[];

    constructor(public _ps:PeliculasService)
    {
      this._ps.getPopulares().subscribe(data=>{
        this.peliculasPopulares=data.results;
      });

      this._ps.getPopularesNinos().subscribe(data=>{
        this.peliculasPopularesNinos=data.results;
      })

      this._ps.getPeliculasCartelera().subscribe(data=>{
        this.peliculasCartelera=data.results;
      })
    }

  ngOnInit() {
  }

}
