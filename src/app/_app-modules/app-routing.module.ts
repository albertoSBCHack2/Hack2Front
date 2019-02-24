import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../_guards/auth-guard.service';

const routes: Routes = [
  { path: 'login', loadChildren: 'src/app/_components/login/login.module#LoginModule' },
  { path: 'tabs', loadChildren: 'src/app/_components/tabs/tabs.module#TabsModule', canActivate: [AuthGuardService] },
  { path: 'lol', loadChildren: 'src/app/_components/lol/lol.module#LolModule' },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
