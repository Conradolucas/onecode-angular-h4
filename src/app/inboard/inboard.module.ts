import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboardComponent } from './inboard.component';
import { InboardRoutingModule } from './inboard-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    InboardRoutingModule,
    SharedModule.forRoot(),
  ],
  declarations: [
    InboardComponent
  ],
})
export class InboardModule {}
