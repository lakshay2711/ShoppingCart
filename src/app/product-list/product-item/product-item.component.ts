import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../product-list.service';
import { HeaderService } from 'src/app/header/header.service';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  
  @Input() product: Product;
  @Input() index: number;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
  }

  addProductToShoppingCart(product: Product) {
    this.headerService.setCartData(product);
  }

}
