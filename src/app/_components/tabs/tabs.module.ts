import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';
import { MaterialComponentsModule } from 'src/app/_app-modules/material-components.module';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    TabsRoutingModule,
    MaterialComponentsModule
  ]
})
export class TabsModule { }
