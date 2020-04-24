import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/comunes/navbar/navbar.component';
import { HomeComponent } from './componentes/comunes/home/home.component';
import { AboutComponent } from './componentes/comunes/about/about.component';
import { HeroesComponent } from './componentes/comunes/heroes/heroes.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeroeComponent } from './componentes/comunes/heroe/heroe.component';


const routes: Routes = [

  { path: '',      component: HomeComponent },
  { path: 'heroes', component: HeroesComponent},
  { path: 'heroe/:id', component: HeroeComponent},
  { path: 'about', component: AboutComponent },
  { path: '**', component: HomeComponent }


];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent
  ],
  exports:[RouterModule],
  imports: [
    HttpClientModule,

    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
