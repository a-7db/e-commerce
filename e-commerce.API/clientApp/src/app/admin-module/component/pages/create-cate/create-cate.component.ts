import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Category, PostCategory } from 'src/app/models/Category';
import { CategoryService } from 'src/app/services/Category.service';
import { LoadingSetupService } from 'src/app/services/LoadingSetup.service';
import { ToastEvokeService } from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-create-cate',
  templateUrl: './create-cate.component.html',
  styleUrls: ['./create-cate.component.css']
})
export class CreateCateComponent implements OnInit {

  cateForm = new FormGroup({
    'title': new FormControl(null, [Validators.required]),
    'slug': new FormControl(null, [Validators.required]),
    'imageUri': new FormControl(null),
    'parentCategoryId': new FormControl(null),
    'isDisplayed': new FormControl(false),
  })

  parentCategories: Category[] = [];
  
  private _categoryService = inject(CategoryService);
  private _loading = inject(LoadingSetupService);
  private toast = inject(ToastEvokeService);
  
  ngOnInit(): void {
    this.loadparentCategory();
  }

  loadparentCategory(){
    this._loading.play(true);
    this._categoryService.getAllParent().subscribe({
      next: (response) => this.parentCategories = response,
      complete: () => this._loading.play(false)
    })
  }

  onSubmit(){
    if(this.cateForm.valid){
      const formValues = this.cateForm.value;
      
      const newCategory: PostCategory = {
        title: formValues.title!,
        slug: formValues.slug!,
        imageUri: formValues.imageUri!,
        parentCategoryId: formValues.parentCategoryId!,
        isDisplayed: formValues.isDisplayed!
      }
      
      if(newCategory.parentCategoryId === 'null')
        newCategory.parentCategoryId = null;

      this._loading.play(true);
      this._categoryService.postCategory(newCategory).subscribe({
        next: (response) => {
          if(response.parentCategory === null)
          this._loading.play(false);
          this.parentCategories.push(response);
          this.toast.success('تم بنجاح', 'الصنف الجديد تمت إضافته').subscribe();
        },
        error: (e) => {
          this._loading.play(false);
          console.log(e)
          this.toast.danger('حدث خطأ ما', `${e.error.errors.title}`).subscribe();
        },
        complete: () => {
          this.cateForm.reset()
        }
      });
    }
  }

}
