import { NgModule } from '@angular/core';
//Modulos para la navegacion por rutas
import { Routes, RouterModule } from '@angular/router';
//Importando componentes por los cuales se usara el servicio de navegacion
import { SignInComponent } from '../../src/app/components/sign-in/sign-in.component';
import { SignUpComponent } from '../../src/app/components/sign-up/sign-up.component';
import { DashboardComponent } from '../../src/app/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../src/app/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../src/app/components/verify-email/verify-email.component';
//modulo para proteccion de rutas
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  //pathMatch significa que toda la url debe coincidir completa
  {path:'',redirectTo:'/sign-in',pathMatch:'full'},
  {path:'sign-in', component:SignInComponent},
  {path:'register-user',component:SignUpComponent},
  //validando que se pueda acceder a dashboard solo cuando se inicie sesión
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'verify-email-address',component:VerifyEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
