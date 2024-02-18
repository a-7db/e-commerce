import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { zoomIn } from 'src/app/animations';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [zoomIn]
})
export class ProductListComponent implements OnInit {
  slug: string | null = '';
  dropdownList: boolean = false;
  animate: boolean = false;
  
  sortingTypes: ISorting[] = [
    { type: 'RELEVANCE', name: 'التشابه' },
    { type: 'NEW_FIRST', name: 'الأجدد' },
    { type: 'POPULARITY', name: 'الأكثر رواجاً' },
  ]
  
  selectedType: ISorting = this.sortingTypes[0];
  
  defualt: Product = {
    name: 'طعام قطط سالمون مع المرق',
    brandId: 'فريسكيز',
    categoryId: 'قطط',
    createdAt: new Date(),
    discount: 10,
    id: '5c12vcs',
    image: 'https://storage.googleapis.com/tm-zopsmart-uploads/320/20220615/386613_1-20220615-220220.png',
    price: 3.95,
    sizeId: '85',
    slug: 'salmon-in-gravy'
  }
  
  range: Product[] = [];
  
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(param => this.slug = param.get('name'))
    this.range.push(this.defualt, this.defualt, this.defualt, this.defualt, this.defualt, this.defualt, this.defualt, this.defualt, this.defualt, this.defualt, this.defualt, this.defualt)
  }
  
  onSorting(type: ISorting){
    this.selectedType = type;
  }
  
  dropdownToggle(){
    this.dropdownList = !this.dropdownList;
    this.animate = !this.animate;
  }
  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent){
    const clickedElement = event.target as HTMLElement
    if (!clickedElement.closest('.close') && this.dropdownList){
      this.dropdownToggle();
    }
  }

}

interface ISorting {
  type: string
  name: string
}