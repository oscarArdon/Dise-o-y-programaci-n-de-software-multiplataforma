import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//importando servicio
import {ArticulosService} from '../articulos.service';

@Component({
  selector: 'app-http-articulo',
  templateUrl: './http-articulo.component.html',
  styleUrls: ['./http-articulo.component.css']
})
export class HttpArticuloComponent implements OnInit {
  //atributo
  articulos = null;
  articulos1 = null;
  articulos2= null;

  //defiendo propiedad en los parametros para que se inyecte cuando se crea la componente
  constructor(private http:HttpClient, private articulosServicio: ArticulosService) { }

  ngOnInit(): void {
    //tomando articulos desde un servicio php
    this.http.get("http://scratchya.com.ar/vue/datos.php").subscribe(
      result=>{
        this.articulos = result;
      },
      error=>{
        console.log('problemas');
      }
    );

    //tomando articulos desde una clase de servicios
    this.articulos1 = this.articulosServicio.retornar();

    //tormando articulos de un web server desde el servicio angular
    this.articulosServicio.retornarWeb().subscribe(
      result=>this.articulos2=result
    )
  }

}
