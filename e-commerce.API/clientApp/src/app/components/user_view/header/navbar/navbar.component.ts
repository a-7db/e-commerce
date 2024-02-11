import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  navs = [
    'أقوى العروض',
    'الأطعمة الطازجة',
    'المأكولات والمشروبات',
    'حياة صحية',
    'تجميل وصحة',
    'مستلزمات المنزل',
    'العناية بالطفل',
    'الحيوانات الأليفة',
    'أقوى العروض',
    'الأطعمة الطازجة',
    'المأكولات والمشروبات',
    'حياة صحية',
    'تجميل وصحة',
    'مستلزمات المنزل',
    'العناية بالطفل',
    'الحيوانات الأليفة',
  ]

  currentIndex = 0;
  itemWidth = 300; // Width of each carousel item
  translateX: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    if (this.currentIndex < this.navs.length - 1) {
      this.currentIndex++;
      this.translateX = this.currentIndex * this.itemWidth + 'px';
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.translateX = this.currentIndex * this.itemWidth + 'px';
    }
  }

}
