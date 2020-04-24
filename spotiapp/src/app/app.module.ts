import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistaComponent } from './app/components/artista/artista.component';
import { HomeComponent } from './app/components/home/home.component';
import { SearchComponent } from './app/components/search/search.component';
import { ShareComponent } from './app/components/share/share.component';
import { HttpClientModule } from "@angular/common/http";
import { CardComponent } from './app/components/card/card.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ArtistComponent } from './app/components/artist/artist.component';
import { LoadingComponent } from './app/components/share/loading/loading.component';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArtistaComponent,
    HomeComponent,
    SearchComponent,
    ShareComponent,
    CardComponent,
    ImagenPipe,
    ArtistComponent,
    LoadingComponent,
    DomSeguroPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
