import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecoveryPwdComponent } from './recovery-pwd.component';

const routes: Routes = [
    { path: '', component: RecoveryPwdComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecoveryPwdRoutingModule { }
