import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSnackBarComponent } from './custom-snack-bar.component';
import { MaterialComponentsModule } from 'src/app/_app-modules/material-components.module';

@NgModule({
  declarations: [
    CustomSnackBarComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  entryComponents: [
    CustomSnackBarComponent
  ]
})
export class CustomSnackbarModule { }
