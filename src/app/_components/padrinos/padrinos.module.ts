import { MaterialComponentsModule } from 'src/app/_app-modules/material-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PadrinosRoutingModule } from './padrinos-routing.module';
import { PadrinosComponent } from './padrinos.component';
import { ErrorDialogModule } from '../_dialogs/error-dialog/error-dialog.module';

@NgModule({
  declarations: [PadrinosComponent],
  imports: [
    CommonModule,
    PadrinosRoutingModule,
    MaterialComponentsModule,
    ErrorDialogModule
  ]
})
export class PadrinosModule { }
