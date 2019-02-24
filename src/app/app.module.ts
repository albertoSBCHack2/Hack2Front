import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './_app-modules/app-routing.module';
import { AppComponent } from './app.component';
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule, GestureConfig } from '@angular/material';
import { ErrorDialogModule } from './_components/_dialogs/error-dialog/error-dialog.module';

@NgModule({
  declarations: [
    AppComponent
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
