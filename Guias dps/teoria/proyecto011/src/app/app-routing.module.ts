import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//importando componentes para usar en rutas
import { JuegodadosComponent } from './juegodados/juegodados.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { HttpArticuloComponent } from './http-articulo/http-articulo.component';

//declaracion nombre de rutas y el componente
const routes: Routes = [
  {
    path:'juegodados',
    component:JuegodadosComponent
  },
  {
    path:'acercade',
    component:AcercadeComponent
  },
  {
    path: 'http-articulos',
    component:HttpArticuloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
