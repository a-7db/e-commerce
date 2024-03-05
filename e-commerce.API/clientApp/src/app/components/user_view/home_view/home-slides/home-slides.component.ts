import { Component, Input, OnInit } from '@angular/core';
import {OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home-slides',
  templateUrl: './home-slides.component.html',
  styleUrls: ['./home-slides.component.css']
})
export class HomeSlidesComponent implements OnInit {
  @Input() slides!: string[];
  constructor() { }

  ngOnInit(): void {
  }


  // Carousel-O Settings
  customOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 1000,
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
