import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecurityComponent } from './security.component';

const SecurityRoutes: Routes = [
  {
    path: '', component: SecurityComponent,
    children: [
    { path: 'acessar', loadChildren: './access/access.module#AccessModule' },
    { path: 'recuperar-senha', loadChildren: './recovery-pwd/recovery-pwd.module#RecoveryPwdModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(SecurityRoutes)],
  exports: [RouterModule],
})
export class SecurityRoutingModule {}
