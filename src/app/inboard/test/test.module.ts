import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule,
    SharedModule,
  ],
  declarations: [
    TestComponent
  ],
  providers: []
})
export class TestModule { }
