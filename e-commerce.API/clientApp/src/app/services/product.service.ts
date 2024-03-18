import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewProduct, Product } from '../models/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endpoints } from '../endpoints';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.BaseUrl;
  constructor(private _http: HttpClient) { }

  PostProduct(product: NewProduct): Observable<Product>{
    return this._http.post<Product>(this.baseUrl + Endpoints.Products, product);
  }
}
