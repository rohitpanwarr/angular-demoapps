import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ToggleViewComponent } from './toggle-view/toggle-view.component';
import { PriceFilterComponent } from './price-filter/price-filter.component';


@NgModule({
  declarations: [ProductListComponent, ToggleViewComponent, PriceFilterComponent],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    SharedModule
  ]
})
export class ProductListModule { }
