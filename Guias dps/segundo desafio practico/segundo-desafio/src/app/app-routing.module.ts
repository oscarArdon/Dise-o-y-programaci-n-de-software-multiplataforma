import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Importando componentes para rutas
import { ClientesComponent } from './clientes/clientes.component';
import { ReparacionesComponent } from './reparaciones/reparaciones.component';
import { LoginComponent } from './login/login.component'; 
import { AuthGuard } from './guard/auth.guard';
import { ListReparacionesComponent } from './list-reparaciones/list-reparaciones.component'; 

const routes: Routes = [
  //pathMatch significa que toda la url debe coincidir completa
  {path:'',redirectTo:'/sign-in',pathMatch:'full'},
  {path:'sign-in', component:LoginComponent},
  {path:'clientes', component:ClientesComponent, canActivate:[AuthGuard]},
  {path:'reparaciones', component:ReparacionesComponent, canActivate:[AuthGuard]},
  {path:'reparaciones/:id',component:ReparacionesComponent,canActivate:[AuthGuard]},
  {path:'list-reparaciones',component:ListReparacionesComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
