import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveryPwdRoutingModule } from './recovery-pwd-routing.module';
import { RecoveryPwdComponent } from './recovery-pwd.component';

@NgModule({
  imports: [ CommonModule, RecoveryPwdRoutingModule ],
  declarations: [ RecoveryPwdComponent ]
})

export class RecoveryPwdModule {}
