import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { IBrand } from 'src/app/models/IBrand';
import { Product } from 'src/app/models/product';
import { brands, categories, products, slides } from 'src/app/models/repo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides: string[] = slides;
  categories: Category[] = categories;
  bestSaller: Product[] = products;
  brands: IBrand[] = brands;
  constructor() { }

  ngOnInit(): void {
  }
  

}
