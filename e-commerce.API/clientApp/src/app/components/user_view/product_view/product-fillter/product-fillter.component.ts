import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-fillter',
  templateUrl: './product-fillter.component.html',
  styleUrls: ['./product-fillter.component.css']
})
export class ProductFillterComponent implements OnInit {

  brands: IBrand[] = [
    { name: 'عافية', ID: 'afya' },
    { name: 'العلالي', ID: 'alali' },
    { name: 'البيكر', ID: 'bekar' },
    { name: 'الكرامة', ID: 'krama' },
    { name: 'المهباج', ID: 'mehbaj' },
    { name: 'النحلة', ID: 'bee' },
    { name: 'البيت', ID: 'house' },
    { name: 'الأسرة', ID: 'family' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}


interface IBrand {
  ID: string,
  name: string
}