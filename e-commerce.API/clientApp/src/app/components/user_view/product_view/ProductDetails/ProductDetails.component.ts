import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { products } from 'src/app/models/repo';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-ProductDetails',
  templateUrl: './ProductDetails.component.html',
  styleUrls: ['./ProductDetails.component.css']
})
export class ProductDetailsComponent implements OnInit {

  
  product: Product = {
    id: '',
    brand: '',
    category: '',
    createdAt: new Date(),
    name: '',
    sizes: [
      {
        discount: 0,
        id: '',
        imagesUri: [''],
        price: 0,
        size: ''
      }
    ],
    slug: ''
  };
  products: Product[] = products;
  index: number = 0;

  showOtherSize(sizeIndex: number){
    this.index = sizeIndex;
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private viewportScroller: ViewportScroller) { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 150]);
      }
    });
  }

  ngOnInit() {
    this.subscribeMethod();
  }

  private subscribeMethod() {
    let product_slug;

    this.activatedRoute.paramMap.subscribe(param => {
      this.index = 0;

      product_slug = param.get('slug');
      this.getProductDetails(product_slug!);

    });
    return product_slug;
  }

  getProductDetails(slug: string){
    this.product = products.find((prod) => prod.slug === slug) as Product;
  }



  // Carousel-O Settings
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false,
    rtl: true
  }

  
}
