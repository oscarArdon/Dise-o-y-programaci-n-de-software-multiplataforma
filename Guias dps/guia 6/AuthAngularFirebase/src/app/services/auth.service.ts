//Servicio para autenticacion de usuario con Firebase
/*Ayudara a crear la autenticacion con usuario/contraseña, autenticacion gmail*/
import { Injectable,NgZone } from '@angular/core';
import { User } from '../models/user';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  //guardar datos de usuario registrado
  userData: any;
  //inyectando atributos a la clase
  constructor(
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
        //almacenando el local los datos del usuario en formato json
        localStorage.setItem('user',JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      }else{//sesion cerrada
        localStorage.setItem('user',null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  //Iniciando sesion con correo electronico/contraseña
  SignIn(email,password){
    return this.afAuth.signInWithEmailAndPassword(email,password).then((result)=>{
      this.ngZone.run(()=>{
        //redireccionando a la ruta dashboard
        this.router.navigate(['dashboard']);
      });
      //creando doc de referencia con los datos del usuario
      this.SetUserData(result.user);
    }).catch((error)=>{//capturando errores...
      window.alert(error.message);
    })
  }

  //Registro con email/password
  SignUp(email,password){
    return this.afAuth.createUserWithEmailAndPassword(email,password).then((result)=>{
      /*Llamando a la funcion SendVerificationEmail cuando un nuevo usuario firme y vuelve
      la funcion*/
      this.SendVerificationMail();
      //creando doc de referencia con los datos del usuario
      this.SetUserData(result.user);
    }).catch((error)=>{//capturando errores...
      window.alert(error.message);
    })
  }

  //enviando verificacion por email cuando se registre un nuevo usuario
  SendVerificationMail(){
    //enviando correo de verif. al usuario actual
    return this.afAuth.currentUser.then(u=>u.sendEmailVerification()).then(()=>{
      this.router.navigate(['verify-email-address']);
    })
  }

  //reestrablecer pass olvidado
  ForgotPassword(passwordResetEmail){
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail).then(()=>{
      window.alert('El correo para reiniciar la contraseña ha sido enviado, favor verificar en tu bandeja de mensajes');
    }).catch((error)=>{
      window.alert(error);
    })
  }

  //devuelve verdadero cuando el usuario esta conectado y
  //el correo electronico esta verificado
  get isLoggedIn():boolean{
    const user = JSON.parse(localStorage.getItem('user'));
    //si falla verificar (true:true)
    return (user !== null && user.emailVerified !== false ) ? true: false;
  }

  //inicio sesion usando FB
  FacebookAuth(){
    //enviando como parametro el proveedor de autenticacion
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }

  //inicio sesion usando TW
  TwitterAuth(){
    //enviando como parametro el proveedor de autenticacion
    return this.AuthLogin(new auth.TwitterAuthProvider());
  }

  //inicio sesion usando Facebook Google
  GoogleAuth(){
    //enviando como parametro el proveedor de autenticacion
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  //logica de autenticacion para ejecutar cualquier proveedor de autenticacion
  AuthLogin(provider){
    return this.afAuth.signInWithPopup(provider).then((result)=>{
      this.ngZone.run(()=>{
        //despues de autenticacion se redirecciona al dashboard
        this.router.navigate(['dashboard']);
      })
      //creando doc de referencia con los datos del usuario
      this.SetUserData(result.user);
    }).catch((error)=>{//capturando errores...
      window.alert(error);
    })
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
      photoUrl: user.photoURL,
      emailVerified: user.emailVerified
    }
    //asignando los datos del usuario al documento de referencia
    return userRef.set(userData,{
      merge:true
    })
  }

  //cerrar sesion
  SignOut(){
    return this.afAuth.signOut().then(()=>{
      //asignando null al item del localstorage
      localStorage.setItem('user',null);
      localStorage.removeItem('user');
      //redireccionando al formulrio de inicio de sesion
      this.router.navigate(['sign-in']);
    })
  }

}
