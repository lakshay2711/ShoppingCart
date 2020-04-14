import { Component, OnInit } from '@angular/core';
import { CartItem } from '../shopping-cart/cart.model';
import { SharedService } from '../shared/shared.service';
import { HeaderService } from './header.service';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cart: CartItem;
  cartItems: CartItem;
  itemsSize: number = 0;
  constructor(private router: Router, 
    private headerService: HeaderService,
    private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
    this.headerService.onPassProductToCart
      .subscribe(items => {
        const products = [];
        if (this.cart) {
          this.cart.totalPrice += items.productPrice;
          this.cart.product.push(items);
        } else {
          products.push(items);
          this.cart = {
            product: products,
            totalPrice: items.productPrice
          };
        }
        this.cart = { ...this.cart };
        this.itemsSize = this.cart.product.length
        console.log(this.cart);
      })
  }

  navigateToShoppingCart() {
    if(!this.cart) {
      return;
    }
    this.router.navigate(['/checkout/cart']);
    this.shoppingCartService.sendDataToShoppingCart(this.cart);
  }

}
