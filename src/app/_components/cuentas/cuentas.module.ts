import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuentasRoutingModule } from './cuentas-routing.module';
import { CuentasComponent } from './cuentas.component';
import { MaterialComponentsModule } from 'src/app/_app-modules/material-components.module';
import { AsociarCuentaDialogModule } from '../_dialogs/asociar-cuenta-dialog/asociar-cuenta-dialog.module';
import { TransferenciaDialogModule } from '../_dialogs/transferencia-dialog/transferencia-dialog.module';
import { NuevaCuentaDialogModule } from '../_dialogs/nueva-cuenta-dialog/nueva-cuenta-dialog.module';

@NgModule({
  declarations: [CuentasComponent],
  imports: [
    CommonModule,
    CuentasRoutingModule,
    MaterialComponentsModule,
    AsociarCuentaDialogModule,
    TransferenciaDialogModule,
    NuevaCuentaDialogModule
  ]
})
export class CuentasModule { }
