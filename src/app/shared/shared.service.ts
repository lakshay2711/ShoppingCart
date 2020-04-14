import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterData } from '../filter/filter.component';
import { CartItem } from '../shopping-cart/cart.model';
import { Product } from '../product-list/product-list.service';

@Injectable()
export class SharedService {

  private _filterData = new BehaviorSubject<FilterData>(null);
  onFilterData = this._filterData.asObservable();

  constructor() { }

  setFilterData(data: FilterData) {
    this._filterData.next(data);
  }

}