import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LolRoutingModule } from './lol-routing.module';
import { LolComponent } from './lol.component';
import { MaterialComponentsModule } from 'src/app/_app-modules/material-components.module';

@NgModule({
  declarations: [LolComponent],
  imports: [
    CommonModule,
    LolRoutingModule,
    MaterialComponentsModule
  ]
})
export class LolModule { }
