import { ProductFormComponent } from './product-form/product-form.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailResolver } from './guards/product-detail.resolver';

const ProductRoutes: Routes = [
    { 
        path: '', 
        component: ProductsComponent,
        children : [
            { 
                path: 'newProduct', 
                component: ProductFormComponent,
            },
            { 
                path: ':id', 
                component: ProductDetailComponent,
                resolve: { product: ProductDetailResolver }
            },
        ] 

    },
];

@NgModule({
    imports: [RouterModule.forChild(ProductRoutes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {}