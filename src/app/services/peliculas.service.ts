import { Injectable } from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx'; //Map
@Injectable()
export class PeliculasService {
  private apikey:string="de3b901a997c8e1a38b44c1ba0cf392f";
  private urlMoviedb:string="https://api.themoviedb.org/3";


  constructor(private jsonp:Jsonp) { }

  getPopulares()
  {
    let url=`${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url)
    .map(res=>res.json());
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  getPopularesNinos()
  {
    let url=`${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`
    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  getPeliculasCartelera()
  {
    let url=`${ this.urlMoviedb }/discover/movie?primary_release_date.gte=2018-04-09&primary_release_date.lte=2018-04-16&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`
    return this.jsonp.get( url )
                .map( res=> res.json());
  }

  getPelicula(id:string)
  {
    let url=`${ this.urlMoviedb }/movie/${id}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`
    return this.jsonp.get( url )
                .map( res=> res.json());
  }

}
