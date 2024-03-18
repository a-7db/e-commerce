import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/Category';
import { Brand } from 'src/app/models/brand';
import { NewProduct } from 'src/app/models/product';
import { Size } from 'src/app/models/size';
import { CategoryService } from 'src/app/services/Category.service';
import { LoadingSetupService } from 'src/app/services/LoadingSetup.service';
import { SizeService } from 'src/app/services/Size.service';
import { BrandService } from 'src/app/services/brand.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  copy_count = [1];
  sizes: Size[] = [];
  brands: Brand[] = [];
  categories: Category[] = [];
  text = 'sdv'

  sizeDataIsvalid: boolean = false;

  prduct_form_group = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    slug: new FormControl(null, [Validators.required]),
    brandId: new FormControl(null, [Validators.required]),
    categoryId: new FormControl(null, [Validators.required]),
  })

  private _cateService = inject(CategoryService)
  private _sizeService = inject(SizeService)
  private _brandService = inject(BrandService)
  private _productService = inject(ProductService)
  private _loading = inject(LoadingSetupService)

  ngOnInit(): void {
    this.loadBrands();
    this.losdCategories()
    this.enableBtn()
  }

  addSize() {
    this.copy_count.push(1);
    this.sizes = this._sizeService.getSizes();
  }
  removeSize() {
    this.copy_count.pop();
    this.sizes.slice(this.sizes.length -1, 1);
  }

  FormSubmit() {
    // create & add values
    const values: any = this.prduct_form_group.value;
    let newProduct: NewProduct = {
      name: values["name"],
      slug: values["slug"],
      brandId: values["brandId"],
      categoryId: values["categoryId"],
      sizes: this._sizeService.getSizes()
    }
    this._loading.play(true);
    this._productService.PostProduct(newProduct).subscribe({
      next: (response) => alert("product is added succesfully"),
      error: (err) => alert(err.error.errors),
      complete: () => {
        this._loading.play(false);
      }
    });
    this.prduct_form_group.reset();
    this._sizeService.setIsValid(true);
  }

  enableBtn() {
    this._sizeService.getIsValid().subscribe(data => {
      if (data) {
        this.sizeDataIsvalid = true;
      }
    });
  }

  loadBrands() {
    this._brandService.getBrands().subscribe({
      next: (response) => {
        this.brands.push(...response);
        // this.prduct_form_group?.setValue({'brand': 'sv'})
      },
    })
  }

  losdCategories() {
    this._cateService.getAllCategories().subscribe({
      next: (response) => this.categories.push(...response)
    })
  }

}
