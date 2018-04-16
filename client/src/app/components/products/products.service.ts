import { Product } from './product';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductsService {


  options;
  domain = this.authService.domain;

  constructor(
    private authService: AuthService,
    private http: Http 
  ) { }

  // Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders() {
    this.authService.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authService.authToken // Attach token
      })
    });
  }

  newProduct(product): Observable<Product> {
     this.createAuthenticationHeaders(); // Create headers
     return this.http.post(this.domain + 'blogs/newBlog', product, this.options).map(res => res.json());
  }

  getAllProducts() {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'products', this.options).map(res => res.json());
  }

  getProduct(id) {
    this.createAuthenticationHeaders(); // Create headers
    return this.http.get(this.domain + 'products/' + id, this.options).map(res => res.json());
  }

  
}
