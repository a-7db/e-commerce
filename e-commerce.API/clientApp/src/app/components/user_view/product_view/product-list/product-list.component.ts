import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { zoomIn } from 'src/app/animations';
import { Product } from 'src/app/models/product';
import { products } from 'src/app/models/repo';

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
 
  
  range: Product[] = products;
  
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(param => this.slug = param.get('name'))
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