import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstilosComponent } from './componentes/estilos/estilos.component';
import { CmpNgStyleComponent } from './componentes/cmp-ng-style/cmp-ng-style.component';
import { CmpNgClassComponent } from './componentes/cmp-ng-class/cmp-ng-class.component';
import { CmpNgClassAsyncComponent } from './componentes/cmp-ng-class-async/cmp-ng-class-async.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { CmpNgSwitchComponent } from './componentes/cmp-ng-switch/cmp-ng-switch.component';
import { UserComponent } from './componentes/user/user/user.component';
import { NuevoComponent } from './componentes/user/actions/nuevo/nuevo.component';
import { EditarComponent } from './componentes/user/actions/editar/editar.component';
import { EliminarComponent } from './componentes/user/actions/eliminar/eliminar.component';

@NgModule({
  declarations: [
    AppComponent,
    EstilosComponent,
    CmpNgStyleComponent,
    CmpNgClassComponent,
    CmpNgClassAsyncComponent,
    ResaltadoDirective,
    CmpNgSwitchComponent,
    UserComponent,
    NuevoComponent,
    EditarComponent,
    EliminarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
