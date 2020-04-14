import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Product } from '../product-list/product-list.service';
import { Cart, CartItem } from './cart.model';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart: CartItem;
  products: Product[];
  totalPrice: number = 0;
  showStatus: boolean = false;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.onCartItems
      .subscribe((cart: CartItem) => {
        this.cart = cart;
        if (this.cart) {
          this.products = cart.product;
          this.totalPrice = cart.totalPrice;
          this.cart.product.map((p, i, prods) => {
            let qty = p.quantities;
            let qtyArray = [];
            if (qty) {
              for (let index = 1; index <= qty; index++) {
                qtyArray.push(index);
              }
            }
            return p.quantity = qtyArray;
          })
        }
      });
  }

  placeOrder() {
    this.showStatus = !this.showStatus;
  }

}
