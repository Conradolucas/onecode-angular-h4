import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboardComponent } from './inboard.component';

const routes: Routes = [
  {
    path: '', component: InboardComponent,
    children: [
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'test', loadChildren: './test/test.module#TestModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboardRoutingModule { }
