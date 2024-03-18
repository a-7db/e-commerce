import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent implements OnInit {

  brandForm = new FormGroup({
    'name': new FormControl(null),
    'slug': new FormControl(null),
    'image': new FormControl(null)
  });
  constructor() { }
  
  ngOnInit(): void {
  }
  
  onSubmit() {
  throw new Error('Method not implemented.');
  }
}
