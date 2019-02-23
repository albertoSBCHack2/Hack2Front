import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './error-dialog.component';
import { MaterialComponentsModule } from 'src/app/_app-modules/material-components.module';

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  entryComponents: [
    ErrorDialogComponent
  ]
})
export class ErrorDialogModule { }
