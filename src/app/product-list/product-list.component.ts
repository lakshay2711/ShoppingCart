import { Component, OnInit } from '@angular/core';
import { ProductListService, Product } from './product-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { FilterData } from '../filter/filter.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  sortType: string;
  fetchFromDB: boolean = true;

  constructor(private productListService: ProductListService,
    private sharedService: SharedService) { }

  ngOnInit() {
    this.products = this.productListService.getProductsHandler();

    this.sharedService.onFilterData
      .subscribe((data: FilterData) => {
        this.sortType = data ? data.sort : 'asc';
        if (this.getObjectKeyValues(data)) {
          this.products = this.productListService.getProductsHandler()
            .filter(product => {
              let isProd = this.isProductName(product, data) ||
                product.category === data.male ||
                product.category === data.female;
              if (isProd) {
                return product;
              }
            });
          this.fetchFromDB = false;
        } else {
          this.fetchFromDB = true;          
        }
        console.log(this.products);
        this.fetchSortByName(this.sortType,this.fetchFromDB);
      });
  }

  fetchSortByName(type: string,fetchFromDB: boolean) {
    if (type === SORT.asc) {
      this.products = this.sort('<', 1,fetchFromDB);
    } else if (type === SORT.dsc) {
      this.products = this.sort('>', -1,fetchFromDB);
    }
  }

  getObjectKeyValues(data: FilterData) {
    for (const key in data) {
      if (data[key] && key !== 'sort') {
        return true;
      }
    }
    return false;
  }

  isProductName(product, data) {
    let isName = false;
    if (data.name) {
      isName = product.productName.replace(/ /g, '').toLocaleLowerCase().includes(data.name.toLocaleLowerCase());
    }
    return isName;
  }

  sort(operator: string, value: number, fetchFromDB: boolean) {
    let products = fetchFromDB ? this.productListService.getProductsHandler() : this.products;
    return products
      .sort((a, b) => { if (`${a.productName} ${operator} ${b.productName}`) { return value; } });
  }

}

export enum SORT {
  asc = 'asc',
  dsc = 'dsc'
}