import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
//importando servicios de autenticacion
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  //inyectando atributos a la case para usar servicios de autenticacion y rutas
  constructor(
    public authService: AuthService,
    public router:Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    if(this.authService.isLoggedIn !== true){//si no ha iniciado sesion
      this.router.navigate(['sign-in']);//es redireccionado a la vista de inicio de sesion
    }
    return true;
  }
  
}
