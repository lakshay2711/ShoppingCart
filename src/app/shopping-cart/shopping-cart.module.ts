import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartService } from './shopping-cart.service';

@NgModule({
  declarations: [
    ShoppingCartComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    ShoppingCartService
  ],
})
export class ShoppingCartModule { }
