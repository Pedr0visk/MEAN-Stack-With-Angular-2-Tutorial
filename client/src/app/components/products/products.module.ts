import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { ProductsService } from './products.service';
import { ProductsComponent } from './products.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailResolver } from './guards/product-detail.resolver';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductNotFoundComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    FormsModule,
    
  ],
  providers: [ProductsService, ProductDetailResolver],
  bootstrap: []
})
export class ProductsModule { }
