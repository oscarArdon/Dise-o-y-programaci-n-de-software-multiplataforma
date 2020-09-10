//los servicios sirven para realizar los accesos a datos (peticiones y envios de datos)
//para colaborar con las componentes

import { Injectable } from '@angular/core';
//importando clases para hacer peticiones Http
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  url = 'https://server-datos.000webhostapp.com/recursos/';//url donde estan alojados los archivos php

  //defiendo atributo de la clase en los parametros del constructor para que se 
  //inyecte cuando se crea la componente
  constructor(private http:HttpClient) { }

  //select all
  /*recuperartodos.php retorna en formato json todos los registros de la tabla */
  recuperarTodos(){
    return this.http.get(this.url+"recuperartodos.php");
  }
  //insert
  /*alta.php recibe los datos en formato json y los registra en la tabla */
  alta(articulo){
    return this.http.post(this.url+"alta.php",JSON.stringify(articulo));
  }
  //delete
  /*baja.php recibe el param codigo por url y elimina el registro de dicho id*/
  baja(codigo:number){
    return this.http.get(this.url+"baja.php?codigo="+codigo);
  }
  //select con id
  /*seleccionar.php recibe el id por url y hace el select de dicho registro */
  seleccionar(codigo:number){
    return this.http.get(this.url+"seleccionar.php?codigo="+codigo);
  }
  //update
  /*modificacion.php recibe los datos en formato json y los modifica en la tabla */
  modificacion(articulo){
    return this.http.post(this.url+"modificacion.php",JSON.stringify(articulo));
  }
}
