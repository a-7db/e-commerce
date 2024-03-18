import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand, PostBrand } from '../models/brand';
import { environment } from 'src/environments/environment';
import { Endpoints } from '../endpoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private baseUrl: string = environment.BaseUrl
  constructor(private _httpClient: HttpClient) { }

  getBrands() {
    return this._httpClient.get<Brand[]>(this.baseUrl + Endpoints.Brands);
  }

  postBrand(newBrand: PostBrand){
    return this._httpClient.post<Brand>(this.baseUrl + Endpoints.Brands, newBrand);
  }
}
