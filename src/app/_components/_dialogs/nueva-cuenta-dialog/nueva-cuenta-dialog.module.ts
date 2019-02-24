import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaCuentaDialogComponent } from './nueva-cuenta-dialog.component';
import { MaterialComponentsModule } from 'src/app/_app-modules/material-components.module';

@NgModule({
  declarations: [NuevaCuentaDialogComponent],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  entryComponents: [
    NuevaCuentaDialogComponent
  ]
})
export class NuevaCuentaDialogModule { }
