import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarListadoComponent } from './cargar-listado/cargar-listado.component';
const routes: Routes = [
  {
    path:'',
    component:CargarListadoComponent
  },
  {
    path:'cargarListado',
    component:CargarListadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
