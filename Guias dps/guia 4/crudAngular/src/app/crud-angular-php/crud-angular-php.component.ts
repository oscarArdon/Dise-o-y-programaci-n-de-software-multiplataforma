import { Component, OnInit } from '@angular/core';
//importando servicio para trabajar con la bd
import { ArticulosService } from '../articulos.service';
//importando modulo para peticiones http
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-crud-angular-php',
  templateUrl: './crud-angular-php.component.html',
  styleUrls: ['./crud-angular-php.component.css']
})
export class CrudAngularPhpComponent implements OnInit {

  //crud con php/mysql
  //atributos
  articulos = null;
  art = {
    codigo: 0,
    descripcion: null,
    precio: null,
    proveedor:null,
    fabricante:null
  }

  //definiendo atributo de la clase en el constructor para inyectarla cuando se cree el componente
  constructor(private articulosServicio: ArticulosService) { }

  //utiliza el servicio que llega al constructor para llamar al metodo 'recuperarTodos'
  ngOnInit(): void {
    this.recuperarTodos();
  }

  //en este metodo utilizamos el servicio de articulos.service para mostrar 
  //todos los registros de la tabla
  recuperarTodos(){
    this.articulosServicio.recuperarTodos().subscribe(result=>this.articulos = result);
    this.hayRegistros();
  }
  //utilizamos el servicio para insertar datos
  alta(){
    this.articulosServicio.alta(this.art).subscribe(datos=>{
      if(datos['resultado']=='OK'){
        alert(datos['mensaje']);
        this.recuperarTodos();//actualizando tabla en la vista
        this.art = {codigo:0, descripcion:null, precio:null, proveedor:null, fabricante:null};//limpiando controles
      }else if(datos['resultado']=='NO'){
        alert(datos['mensaje']);
        this.recuperarTodos();//actualizando tabla en la vista
        this.art = {codigo:0, descripcion:null, precio:null, proveedor:null, fabricante:null};//limpiando controles
      }
    });
  }
  //utilizamos el servicio para eliminar registros
  baja(codigo){
    if(confirm('¿Estas seguro de eliminar este registro?')){
      this.articulosServicio.baja(codigo).subscribe(datos=>{
        if(datos['resultado'] == 'OK'){
          alert(datos['mensaje']);
          this.recuperarTodos();//actualizando datos en la vista
        }else if(datos['resultado'] == 'NO'){
          alert(datos['mensaje']);
          this.recuperarTodos();//actualizando datos en la vista
        }
      });
    }
  }
  //utilizamos el servicio para modificar registros
  modificacion(){
    this.articulosServicio.modificacion(this.art).subscribe(datos=>{
      if(datos['resultado']=='OK'){
        alert(datos['mensaje']);
        this.recuperarTodos();//actualizando datos en la vista
        this.art = {codigo:0, descripcion:null, precio:null,proveedor:null, fabricante:null};//limpiando controles
      }else if(datos['resultado']=='NO'){
        alert(datos['mensaje']);
        this.recuperarTodos();//actualizando datos en la vista
        this.art = {codigo:0, descripcion:null, precio:null,proveedor:null, fabricante:null};//limpiando controles
      }
    });
  }
  //servicio para seleccionar por id
  seleccionar(codigo){
    this.articulosServicio.seleccionar(codigo).subscribe(result=>this.art = result[0]);
  }

  hayRegistros(){
    if(this.articulos === null){
      return false;
    }else{
      return true;
    }        
  }

}
