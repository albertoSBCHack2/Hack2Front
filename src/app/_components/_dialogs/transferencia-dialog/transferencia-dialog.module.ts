import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferenciaDialogComponent } from './transferencia-dialog.component';
import { MaterialComponentsModule } from 'src/app/_app-modules/material-components.module';

@NgModule({
  declarations: [TransferenciaDialogComponent],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  entryComponents: [
    TransferenciaDialogComponent
  ]
})
export class TransferenciaDialogModule { }
