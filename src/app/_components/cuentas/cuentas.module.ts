import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentasRoutingModule } from './cuentas-routing.module';
import { CuentasComponent } from './cuentas.component';
import { MaterialComponentsModule } from 'src/app/_app-modules/material-components.module';

@NgModule({
  declarations: [CuentasComponent],
  imports: [
    CommonModule,
    CuentasRoutingModule,
    MaterialComponentsModule
  ]
})
export class CuentasModule { }
