import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category, PostCategory } from '../models/Category';
import { Endpoints } from '../endpoints';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http: HttpClient){}

  private baseUrl: string = environment.BaseUrl;

  getAllCategories(){
    return this._http.get<Category[]>(this.baseUrl + Endpoints.Categories);
  }

  getAllParent(){
    return this._http.get<Category[]>(this.baseUrl + Endpoints.ParentCategory);
  }

  postCategory(cate: PostCategory){
    return this._http.post<Category>(this.baseUrl + Endpoints.Categories, cate);
  }

}
