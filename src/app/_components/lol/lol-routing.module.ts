import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LolComponent } from './lol.component';

const routes: Routes = [
  { path: '', component: LolComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LolRoutingModule { }
