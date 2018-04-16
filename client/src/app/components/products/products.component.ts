import { AuthService } from './../../services/auth.service';
import { Http } from '@angular/http';
import { ProductsService } from './products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  constructor(
    private productService: ProductsService,
    private authService: AuthService,
    private http: Http
  ) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      console.log(data);
      this.products = data.products;
    });
  }

}
