//servicio para hacer peticiones http y enviarlas al componente
import { Injectable } from '@angular/core';
import {HttpClient, HttpParameterCodec} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  //utilizando parametro en el constructor para usar HttpClient
  constructor(private http:HttpClient) { }

  retornarWeb(){
    return this.http.get("http://scratchya.com.ar/vue/datos.php");
  }

  retornar(){
    return [
      {
        codigo: 1,
        descripcion: "papas",
        precio: 12.33
      },
      {
        codigo: 2,
        descripcion: "manzanas",
        precio: 54
      },
      {
        codigo: 3,
        descripcion: "sandía",
        precio: 14
      }
    ];
  }
}
