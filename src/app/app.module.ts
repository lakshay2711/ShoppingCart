import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.routing.module';
import { ProductListModule } from './product-list/product-list.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { FilterComponent } from './filter/filter.component';
import { SharedService } from './shared/shared.service';
import { HeaderService } from './header/header.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ProductListModule,
    ShoppingCartModule
  ],
  providers: [SharedService,HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
