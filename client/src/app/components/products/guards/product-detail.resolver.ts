import { Observable } from 'rxjs/Rx';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from "@angular/core";
import { ProductsService } from '../products.service';
import { Product } from '../product';


@Injectable()
export class ProductDetailResolver implements Resolve<any> {
    constructor(private productService: ProductsService ) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ): Observable<any>|Promise<any>|any {
            
            
            let id = route.params['id'];
            return this.productService.getProduct(id); 
    }
}
