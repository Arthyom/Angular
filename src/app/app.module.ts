import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { UpperLowerCaseComponent } from './componentes/pipes/upper-lower-case/upper-lower-case.component';
import { HomeComponent } from './componentes/home/home.component';
import { ApoRoutingModule } from './app-routing.module';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeEsAR from '@angular/common/locales/es-AR';
registerLocaleData(localeEsAR, 'es-Ar');

@NgModule({
  declarations: [
    AppComponent,
    UpperLowerCaseComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ApoRoutingModule,
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: "es-AR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
