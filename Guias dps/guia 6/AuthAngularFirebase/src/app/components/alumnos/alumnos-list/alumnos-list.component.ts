import { Component, OnInit } from '@angular/core';

//modelo
import {Alumno} from '../../../models/alumno';
//service
import {AlumnoService} from '../../../services/alumno.service';
//toastr
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent implements OnInit {

  // Arreglo para almacenar la informacion que se obtenga de la base de datos de firebase
  alumnoList: Alumno[];

  constructor(
    private alumnoService:AlumnoService,
    private toastr:ToastrService
  ) { }

  /* 
    Cuando cargue la aplicación, que reciba toda la información con el método 'getProducts' del servicio de firebase
     pero ademas que utilice el metodo 'snapshotChanges' para estar atento a los cambios que tengas los datos en la
     base de datos de firebase, para recorrerlo con forEach. 
  
     Cada dato lo obtengo 'payload' y lo convierto en formato JSON y lo asigno a la variable 'x'
     let x = element.payload.toJSON();
  
     Se le asigna por cada elemento la llave de cada registro, en una propiedad llamada '$key'
     por que se necesita para luego eliminar el registro
     x["$key"] = element.key;
  
     Cuando ya se tiene el elemento se asigna a mi arreglo 'productList' para ser mostrado en mi pantalla list
     this.productList.push(x as Product);
  */
  ngOnInit(){
    return this.alumnoService.getAlumnos()
    .snapshotChanges().subscribe(item=>{
      this.alumnoList = [];
      item.forEach(element=>{
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.alumnoList.push(x as Alumno);
      });
    });
  }

  /* 
   Recibe una varible de tipo 'Product' para invocar el servicio de firebase, para actualizarlo
   Para no ocupar el doble enlace de datos ' [(ngModel)]' , se va utilizar 'Object.assign({}, product)'  
  */
  onEdit(alumno:Alumno){
    this.alumnoService.selectedAlumno = Object.assign({},alumno);
  }

  /* 
   Recibe la llave '$key' para eliminar el registro, invocando el metodo 'deleteProduct' del servicio de firebase
   ademas muestra un 'warning' con toastr
*/
  onDelete($key:string){
    if(confirm('Esta seguro de eliminar este registro?')){
      this.alumnoService.deleteAlumno($key);
      this.toastr.success('Eliminado exitosamente','Alumno eliminado')
    }
  }

}
