import { Component, Input, OnInit } from '@angular/core';
import { IBrand } from 'src/app/models/IBrand';

@Component({
  selector: 'app-Brand',
  templateUrl: './Brand.component.html',
  styleUrls: ['./Brand.component.css']
})
export class BrandComponent implements OnInit {
  @Input() brand!: IBrand;
  constructor() { }

  ngOnInit() {
  }

}
