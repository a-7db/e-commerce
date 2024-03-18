import { Component, Input, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';

@Component({
  selector: 'app-Brand',
  templateUrl: './Brand.component.html',
  styleUrls: ['./Brand.component.css']
})
export class BrandComponent implements OnInit {
  @Input() brand!: Brand;
  constructor() { }

  ngOnInit() {
  }

}
