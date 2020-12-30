import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDivRoutingModule } from './dynamic-div-routing.module';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DynamicDivComponent],
  imports: [
    CommonModule,
    DynamicDivRoutingModule,
    SharedModule
  ]
})
export class DynamicDivModule { }
