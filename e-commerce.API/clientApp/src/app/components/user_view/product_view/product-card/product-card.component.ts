import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { SharedService } from 'src/app/services/Shared.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  index: number = 0;
  constructor(private sharedService: SharedService) { }
  
  ngOnInit(): void {
  }

  discountCalculate(price: number, discount: number): number{
    return price - (price * discount) / 100
  }

  cardOnClick() {
    this.sharedService.clearCommand(true);
  }

}
