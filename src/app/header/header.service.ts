import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../product-list/product-list.service';

@Injectable({
    providedIn:'root'
})
export class HeaderService {

    @Output() onPassProductToCart: EventEmitter<Product> = new EventEmitter();
    
    setCartData(product: Product) {
        this.onPassProductToCart.emit(product);
    }
}