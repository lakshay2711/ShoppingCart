import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list.component';
import { SharedService } from '../shared/shared.service';

// const childRoutes : Routes = [
//     { path : '' , component: ProductItemComponent },
// ];

@NgModule({
  declarations: [
    ProductItemComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
  ],
  providers: [
  ],
})
export class ProductListModule { }
