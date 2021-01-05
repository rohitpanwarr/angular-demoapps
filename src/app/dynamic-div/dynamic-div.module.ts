import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDivRoutingModule } from './dynamic-div-routing.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';
import { SharedModule } from '../shared/shared.module';
import { DivComponent } from './div/div.component';
import { PlaceholderDirective } from './placeholder.directive';

@NgModule({
  declarations: [DynamicDivComponent, DivComponent, PlaceholderDirective],
  imports: [
    CommonModule,
    DynamicDivRoutingModule,
    InfiniteScrollModule,
    SharedModule
  ]
})
export class DynamicDivModule { }
