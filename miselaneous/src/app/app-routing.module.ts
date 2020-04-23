import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstilosComponent } from './componentes/estilos/estilos.component';

import { UserComponent } from './componentes/user/user/user.component';
import { SUBROUTES } from './componentes/user/user/user.routing';


const routes: Routes = [
  {path:'home', component: EstilosComponent},
  {path:'user', component: UserComponent},

  {
    path:'user/:id', component: UserComponent,
    children: SUBROUTES
  },

  {path: '**', component: EstilosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
