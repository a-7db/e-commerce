import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/Category';
import { Brand } from 'src/app/models/brand';
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
  brands: Brand[] = brands;
  constructor() { }

  ngOnInit(): void {
  }
  

}
