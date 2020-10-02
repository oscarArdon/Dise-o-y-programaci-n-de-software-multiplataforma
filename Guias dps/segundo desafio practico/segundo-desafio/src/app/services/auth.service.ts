//Servicio para autenticacion de usuario con Firebase
/*Ayudara a crear la autenticacion con usuario/contraseña, autenticacion gmail*/
import { Injectable,NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
//Importando modelo de datos para usuario
import { User } from '../models/user';
// toastr
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //guardar datos de usuario registrado
  userData: any = {
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null
  };
  
  constructor(
    private toastr:ToastrService,
    public afs: AngularFirestore,//inyectar servicio firestore
    public afAuth: AngularFireAuth,//inyectar servicio de auth de firebase
    public router: Router,
    public ngZone: NgZone//servicio NgZone para eliminar advertencia de alcance externo
  ) {

    /*Guardando datos de usuario en almacenamiento local cuando inicie
    sesion y configurando null cuando cierre sesion */
    this.afAuth.authState.subscribe(user=>{
      if(user){//sesion iniciada
        this.userData = user;      
        console.log(this.userData);  
      }else{//sesion cerrada
        this.userData = null;
      }
    });
  }
  

  //Iniciando sesion con correo electronico/contraseña
  SignIn(email,password){    
    return this.afAuth.signInWithEmailAndPassword(email,password).then((result)=>{
      this.ngZone.run(()=>{
        //redireccionando a la ruta dashboard
        this.router.navigate(['clientes']);
      });
      //creando doc de referencia con los datos del usuario
      this.SetUserData(result.user);
    }).catch((error)=>{//capturando errores...      
      this.toastr.error(error.message);
    })
  }

  GoogleAuth(){
    //enviando como parametro el proveedor de autenticacion
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  //logica de autenticacion para ejecutar cualquier proveedor de autenticacion
  AuthLogin(provider){
    return this.afAuth.signInWithPopup(provider).then((result)=>{
      this.ngZone.run(()=>{
        //despues de autenticacion se redirecciona al dashboard
        this.router.navigate(['clientes']);
      })
      //creando doc de referencia con los datos del usuario
      this.SetUserData(result.user);
    }).catch((error)=>{//capturando errores...
      this.toastr.error(error.message);
    })
  }

  get isLoggedIn():boolean{
    const user = this.userData;
    //si falla verificar (true:true)
    return (user !== null) ? true: false;
  }

  /*Configurando datos del usuario al iniciar sesion con usuario/pass,
  registrarse con usuario/pass e iniciar sesion con autenticacion social
  proveedor en la base de datos de Firestore usando el servicio AngularFirestore + AngularFirestoreDocument*/
  SetUserData(user){
    //creando referencia al documento con los datos del user
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    //asignando datos del user desde firebase a un obj json del modelo User
    const userData: User={
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoUrl: user.photoURL
    }
    //asignando los datos del usuario al documento de referencia
    return userRef.set(userData,{
      merge:true
    })
  }

  //cerrar sesion
  SignOut(){
    return this.afAuth.signOut().then(()=>{
      //asignando null a bandera
      this.userData = null;
      //redireccionando al formulrio de inicio de sesion
      this.router.navigate(['sign-in']);
    })
  }


}
