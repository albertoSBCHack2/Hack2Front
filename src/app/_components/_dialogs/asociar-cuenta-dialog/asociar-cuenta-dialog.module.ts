import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsociarCuentaDialogComponent } from './asociar-cuenta-dialog.component';
import { MaterialComponentsModule } from 'src/app/_app-modules/material-components.module';

@NgModule({
  declarations: [AsociarCuentaDialogComponent],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  entryComponents: [
    AsociarCuentaDialogComponent
  ]
})
export class AsociarCuentaDialogModule { }
