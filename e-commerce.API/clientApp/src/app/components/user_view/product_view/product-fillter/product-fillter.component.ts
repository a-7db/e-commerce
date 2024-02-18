import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-fillter',
  templateUrl: './product-fillter.component.html',
  styleUrls: ['./product-fillter.component.css']
})
export class ProductFillterComponent implements OnInit {

  brands: IBrand[] = [
    { name: 'عافية', ID: 'afya', checked: false },
    { name: 'العلالي', ID: 'alali', checked: false },
    { name: 'البيكر', ID: 'bekar', checked: false },
    { name: 'الكرامة', ID: 'krama', checked: false },
    { name: 'المهباج', ID: 'mehbaj', checked: false },
    { name: 'النحلة', ID: 'bee', checked: false },
    { name: 'البيت', ID: 'house', checked: false },
    { name: 'الأسرة', ID: 'family', checked: false },
    { name: 'أبو ولد', ID: 'family', checked: false },
    { name: 'أكورسا', ID: 'family', checked: false },
    { name: 'اكتيفيا', ID: 'family', checked: false },
    { name: 'الدوحة', ID: 'family', checked: false },
    { name: 'الربيع', ID: 'family', checked: false },
    { name: 'اكتيفيا', ID: 'family', checked: false },
  ]

  length: number = 8;
  label: string = 'عرض المزيد الماركة'

  constructor() { }

  ngOnInit(): void {
  }

  unchackedAll(){
    this.brands.forEach((brand: IBrand) => brand.checked = false);
  }

  displayMore(){
    this.length = this.length === 8? this.brands.length : 8;
    this.label = this.label === 'عرض المزيد الماركة' ? 'عرض أقل الماركة' : 'عرض المزيد الماركة';
  }
}


interface IBrand {
  ID: string,
  name: string,
  checked: boolean
}