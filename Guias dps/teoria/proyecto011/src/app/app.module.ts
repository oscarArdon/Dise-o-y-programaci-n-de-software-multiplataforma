import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//modulo de rutas
import { AppRoutingModule } from './app-routing.module';
//modulo para peticiones http
import { HttpClientModule } from '@angular/common/http';
//modulos para vistas
import { AppComponent } from './app.component';
import { JuegodadosComponent } from './juegodados/juegodados.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { DadoComponent } from './dado/dado.component';
import { HttpArticuloComponent } from './http-articulo/http-articulo.component';
import { CronometroComponent } from './cronometro/cronometro.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegodadosComponent,
    AcercadeComponent,
    DadoComponent,
    HttpArticuloComponent,
    CronometroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
