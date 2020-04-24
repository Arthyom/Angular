import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { ArtistaComponent } from './app/components/artista/artista.component';
import { SearchComponent } from './app/components/search/search.component';
import { ArtistComponent } from './app/components/artist/artist.component';


const routes: Routes = [
  { path: 'home',    component: HomeComponent },
  { path: 'artista', component: ArtistaComponent },
  { path: 'buscar',  component: SearchComponent},
  { path: 'artista/:id',  component: ArtistComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
