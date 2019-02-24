import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { MaterialComponentsModule } from 'src/app/_app-modules/material-components.module';
import { ErrorDialogModule } from '../_dialogs/error-dialog/error-dialog.module';
import { CustomSnackbarModule } from '../custom-snack-bar/custom-snackbar.module';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    TabsRoutingModule,
    MaterialComponentsModule,
    ErrorDialogModule,
    CustomSnackbarModule
  ]
})
export class TabsModule { }
