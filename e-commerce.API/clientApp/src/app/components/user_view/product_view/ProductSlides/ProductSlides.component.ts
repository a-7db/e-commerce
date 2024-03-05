import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { SharedService } from 'src/app/services/Shared.service';

@Component({
  selector: 'app-ProductSlides',
  templateUrl: './ProductSlides.component.html',
  styleUrls: ['./ProductSlides.component.css']
})
export class ProductSlidesComponent implements OnInit {

  @Input() products!: Product[];
  @Input() grid_col!: string;
  @Input() items_count!: number;


  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.reset();
    this.pagination();
  }

  currentIndex = 0;
  itemWidth = 100;
  translateX: string = '';
  nextState: boolean = true;
  groups: number[] = [];
  

  pagination(){
    const total = this.products.length * this.itemWidth
    const divisions = this.items_count <= 2? 100 : 500
    let remaining = total;
    
    while (remaining >= divisions){
      this.groups.push(this.itemWidth);
      remaining -= divisions
    }

    if(remaining > 0){
      remaining = remaining / this.items_count;
      this.groups.push(remaining);
    }
  }

  private reset() {
    this.sharedService.getSearchSettings().subscribe((data) => {
      if (data) {
        this.currentIndex = 0;
        this.translateX = '0%';
      }
    });
  }

  next() {
    if (this.currentIndex < this.products.length - 1) {
      this.currentIndex++;
      this.translateX = this.currentIndex * this.groups[this.currentIndex] + '%';

      let result = Math.floor(this.products.length / this.items_count);
      const page = result === 1 ? 0 : result

      if(page <= this.currentIndex){
        this.nextState = false
      }
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.translateX = this.currentIndex * this.itemWidth + '%';

      const page = Math.floor(this.products.length / this.items_count)
      if (page >= this.currentIndex) {
        this.nextState = true;
      }
    }
  }


}
