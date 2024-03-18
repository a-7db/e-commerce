import { Component, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Size, imgsList } from 'src/app/models/size';
import { SizeService } from 'src/app/services/Size.service';

@Component({
  selector: 'app-add-sizes',
  templateUrl: './add-sizes.component.html',
  styleUrls: ['./add-sizes.component.css']
})
export class AddSizesComponent implements OnInit {
  
  size!: Size;
  productSize: string = '';
  price?: number;
  discount?: number;
  image: string = '';
  output: string[] = [];
  addSizeBtn: boolean = false
  addImgBtn: boolean = false

  imgList: string[] = [];

  constructor(private sizeSevice: SizeService) { }
  ngOnInit(): void { 
    this.sizeSevice.getIsValid().subscribe(data => data? this.showOutput(null) : '')
  }


  addImage(){
    if(this.image !== ''){
      this.imgList.push(this.image);
      this.image = '';
      this.addImgBtn = false;
      this.isValid()
    } else{
      this.addImgBtn = true;
    }
  }

  addSize(){
    // open create product btn
    this.sizeSevice.setIsValid(true);
    
    // Push Img to imgList
    if (this.image !== '') {
      this.imgList.push(this.image);
      this.image = '';
      this.addImgBtn = false;
    }

    // preapare a size object
    this.collect();

    // display all sizes
    this.showOutput(this.size);

    // send the size to the service
    this.sizeSevice.setSizes(this.size);

    // clear the inputs
    this.reset();
  }

  isValid(){
    if (this.productSize.length < 1
      || this.price as number <= 0
      || this.discount as number < 0
      || this.image.length < 1
      || (this.price === null || this.discount == null))
      {
        this.sizeSevice.setIsValid(false);
      } 
      else
      {
        this.addSizeBtn = true;
        this.addImgBtn = true;
      }
  }

  collect(){
    this.size = {
      productSize: this.productSize,
      price: this.price as number,
      discount: this.discount as number,
      imagesUri: this.imgList.map((img) => {
        return { imageUri: img }
      }),
    };
  }

  reset(){
    
    this.productSize = '';
    this.price = undefined;
    this.discount = undefined;
    this.imgList = [];

    this.addSizeBtn = false;
    this.addImgBtn = false;
  }

  showOutput(size: Size | null) {
    if(size === null){
      this.output = []
    } else {
      const format = `${size.productSize} - ${size.price} رس (${size.imagesUri.length}) صورة`;
      this.output.push(format);
    }
  }

}

