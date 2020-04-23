import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NuevoComponent } from '../actions/nuevo/nuevo.component';
import { EditarComponent } from '../actions/editar/editar.component';
import { EliminarComponent } from '../actions/eliminar/eliminar.component';

export  const SUBROUTES: Routes = [
    { path: 'crear', component: NuevoComponent },
    { path: 'editar', component: EditarComponent },
    { path: 'eliminar', component: EliminarComponent},
    { path: '**', redirectTo: 'crear', pathMatch: 'full' },
];

