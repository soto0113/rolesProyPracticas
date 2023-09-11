import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { CargarListadoComponent } from './cargar-listado/cargar-listado.component';


@NgModule({
  declarations: [
    CargarListadoComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    
  ]
})
export class BodyModule { }
