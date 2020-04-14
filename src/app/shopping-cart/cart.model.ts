import { Product } from '../product-list/product-list.service';

export interface CartItem {
    product: Product[],
    totalPrice: number
}

