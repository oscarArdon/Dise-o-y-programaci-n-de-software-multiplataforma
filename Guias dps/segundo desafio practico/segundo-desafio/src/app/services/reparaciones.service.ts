import { Injectable } from '@angular/core';
//importando servicio http
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReparacionesService {

 //url donde se encuentran los archivos php
 END_POINT = 'https://discomfortable-toe.000webhostapp.com/recursos/';
 //inyectando atributo de tipo HttpClient en la clase
 constructor(private http:HttpClient) { }

 //seleccionando todos los clientes
 select(){
   return this.http.get(this.END_POINT+"/select_all_reparaciones.php");
 }

 //insertando reparacion
 insert(cliente){
   return this.http.post(this.END_POINT+"/insert_reparacion.php",JSON.stringify(cliente));
 }

 //eliminando cliente
 delete(id:number){
   return this.http.get(this.END_POINT+"/delete_reparacion.php?codigo="+id);
 }

 //modificando cliente
 update(cliente){
   return this.http.post(this.END_POINT+"/update_cliente.php",JSON.stringify(cliente));
 }

 //seleccionado cliente por id
 getConteo(id:number){
   return this.http.get(this.END_POINT+"/contador.php?codigo="+id);
 }
//seleccionar reparaciones por cliente
selectrepacli(id:number){
  return this.http.get(this.END_POINT+"/select_reparacion_cliente.php?codigo="+id);
}

getreparacionid(id:number){
  return this.http.get(this.END_POINT+"/select_reparacion_byclient.php?codigo="+id);
}
}
