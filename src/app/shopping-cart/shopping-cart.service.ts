import { Injectable, Output, EventEmitter } from '@angular/core';
import { CartItem } from './cart.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class ShoppingCartService {

    onCartItems: BehaviorSubject<CartItem> = new BehaviorSubject(null);
    
    sendDataToShoppingCart(cart:CartItem) {
        console.log(cart);
        this.onCartItems.next(cart);
    }

}