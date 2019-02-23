import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BancosRoutingModule } from './bancos-routing.module';
import { BancosComponent } from './bancos.component';
import { MaterialComponentsModule } from 'src/app/_app-modules/material-components.module';

@NgModule({
  declarations: [BancosComponent],
  imports: [
    CommonModule,
    BancosRoutingModule,
    MaterialComponentsModule
  ]
})
export class BancosModule { }
