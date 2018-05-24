import { Component, OnInit } from '@angular/core';
//Router
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  buscar(texto:string){
    this.router.navigate(['/buscar',texto]);

  }

}
