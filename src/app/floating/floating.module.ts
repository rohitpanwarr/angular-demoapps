import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FloatingRoutingModule } from './floating-routing.module';
import { FloatingTextComponent } from './floating-text/floating-text.component';
import { TimesDirective } from './times.directive';


@NgModule({
  declarations: [FloatingTextComponent, TimesDirective],
  imports: [
    CommonModule,
    FloatingRoutingModule,
    SharedModule
  ]
})
export class FloatingModule { }
