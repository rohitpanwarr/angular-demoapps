import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { TableHomeComponent } from './table-home/table-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TableHomeComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    SharedModule
  ]
})
export class TableModule { }
