import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { EllipsisPipe } from './ellipsis.pipe';
import { ToggleViewComponent } from './toggle-view/toggle-view.component';
import { PriceFilterComponent } from './price-filter/price-filter.component';


@NgModule({
  declarations: [ProductListComponent, ToggleViewComponent, PriceFilterComponent, EllipsisPipe],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    SharedModule
  ]
})
export class ProductListModule { }
