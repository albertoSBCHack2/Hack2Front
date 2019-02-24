import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './_app-modules/app-routing.module';
import { AppComponent } from './app.component';
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule, GestureConfig } from '@angular/material';
import { ErrorDialogModule } from './_components/_dialogs/error-dialog/error-dialog.module';
// import { CustomSnackBarComponent } from './_components/custom-snack-bar/custom-snack-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    // CustomSnackBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatProgressBarModule,
    ErrorDialogModule
  ],
  providers: [
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
