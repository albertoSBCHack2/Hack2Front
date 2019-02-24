import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from 'src/app/_app-modules/material-components.module';

import { RetosRoutingModule } from './retos-routing.module';
import { RetosComponent } from './retos.component';
import { ErrorDialogModule } from '../_dialogs/error-dialog/error-dialog.module';
import { MatSelectModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    RetosRoutingModule,
    MaterialComponentsModule,
    ErrorDialogModule,
    MatSelectModule
  ],
  declarations: [RetosComponent]
})
export class RetosModule { }
