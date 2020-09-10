import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importando modulo para formularios
import { FormsModule } from '@angular/forms';
//importando modulo para peticiones http
import { HttpClientModule } from '@angular/common/http';
//modulos vista
import { AppComponent } from './app.component';
import { CrudAngularPhpComponent } from './crud-angular-php/crud-angular-php.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudAngularPhpComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
