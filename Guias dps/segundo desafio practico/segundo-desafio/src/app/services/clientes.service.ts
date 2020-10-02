/*Servicio para el envio de peticiones al backend php */

import { Injectable } from '@angular/core';
//importando servicio http
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ClientesService {

  //url donde se encuentran los archivos php
  END_POINT = 'https://server-datos.000webhostapp.com/recursos-desafio2';
  //inyectando atributo de tipo HttpClient en la clase
  constructor(private http:HttpClient) { }

  //seleccionando todos los clientes
  select(){
    return this.http.get(this.END_POINT+"/select_all_clientes.php");
  }

  //insertando cliente
  insert(cliente){
    return this.http.post(this.END_POINT+"/insert_cliente.php",JSON.stringify(cliente));
  }

  //eliminando cliente
  delete(id:number){
    return this.http.get(this.END_POINT+"/delete_cliente.php?codigo="+id);
  }

  //modificando cliente
  update(cliente){
    return this.http.post(this.END_POINT+"/update_cliente.php",JSON.stringify(cliente));
  }

  //seleccionado cliente por id
  getCliente(id:number){
    return this.http.get(this.END_POINT+"/select_cliente.php?codigo="+id);
  }

}
