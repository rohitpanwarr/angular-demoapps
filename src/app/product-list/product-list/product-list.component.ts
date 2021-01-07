import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  isGridView = true;

  changeView(isGridView: boolean) {
    this.isGridView = isGridView;
  }

  filterApplied(filterValue: string) {
  
    switch (filterValue) {
      case 'low':
        this.productList.sort((a: any, b: any): any => {
          return parseFloat(a.price) - parseFloat(b.price);
        });
        break;
      case 'high':
        this.productList.sort((a: any, b: any): any => {
          return parseFloat(b.price) - parseFloat(a.price);
        });
        break;
      default:
        this.spinner.show();
        this.productService.getProducts().subscribe((response) => {
          this.productList = response;  
          this.spinner.hide();
        });
    }
  }

  productList: any = [];

  constructor(
    private productService: ProductService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.productService.getProducts().subscribe((response: any) => {
      this.productList = response;
      this.spinner.hide();
    });
  }

}
