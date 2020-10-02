import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Modulo para trabajar con formularios
import { FormsModule } from '@angular/forms';
// Toastr, para notificaciones en angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//Firebase services + enviroment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
//Modulo para rutas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ReparacionesComponent } from './reparaciones/reparaciones.component';
import { LoginComponent } from './login/login.component';
//importando servicio de autenticacion
import { AuthService } from './services/auth.service';
//importando modulo para peticiones http
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ReparacionesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AngularFirestoreModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
