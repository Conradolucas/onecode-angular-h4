import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { LogoComponent } from '../shared/components/logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    SecurityRoutingModule
  ],
  declarations: [
    SecurityComponent,
    LogoComponent
  ]
})

export class SecurityModule {}
