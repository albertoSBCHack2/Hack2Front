import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '', component: TabsComponent, children: [
      { path: 'cuentas', loadChildren: 'src/app/_components/cuentas/cuentas.module#CuentasModule' },
      { path: 'padrinos', loadChildren: 'src/app/_components/padrinos/padrinos.module#PadrinosModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
