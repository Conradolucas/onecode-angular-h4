import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Auth } from './shared';

const routes: Routes = [
  {
    path: '',
    loadChildren: './inboard/inboard.module#InboardModule',
    canActivate: [Auth]
  },
  { path: 'login', loadChildren: './security/security.module#SecurityModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
