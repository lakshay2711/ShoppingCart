import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product-list.service';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  
  @Input() product: Product;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

  addProductToCart(product) {
    console.log(product)
  }

}
