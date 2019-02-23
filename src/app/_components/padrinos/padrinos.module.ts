import { MaterialComponentsModule } from 'src/app/_app-modules/material-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PadrinosRoutingModule } from './padrinos-routing.module';
import { PadrinosComponent } from './padrinos.component';

@NgModule({
  declarations: [PadrinosComponent],
  imports: [
    CommonModule,
    PadrinosRoutingModule,
    MaterialComponentsModule
  ]
})
export class PadrinosModule { }
