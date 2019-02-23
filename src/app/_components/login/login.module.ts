import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MaterialComponentsModule } from 'src/app/_app-modules/material-components.module';
import { ErrorDialogModule } from '../_dialogs/error-dialog/error-dialog.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialComponentsModule,
    ErrorDialogModule
  ]
})
export class LoginModule { }
