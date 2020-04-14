import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const appRoutes : Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path : 'products' , component: ProductListComponent },
    { path : 'cart' , component : ShoppingCartComponent },
];

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule {}