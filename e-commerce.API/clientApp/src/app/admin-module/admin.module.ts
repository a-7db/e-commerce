import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-module-routing.module';
import { DashboardComponent } from './component/shared/dashboard/dashboard.component';
import { HomeComponent } from './component/pages/home/home.component';
import { CreateProductComponent } from './component/pages/create-product/create-product.component';
import { AddSizesComponent } from './component/shared/add-sizes/add-sizes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavDropDownComponent } from './component/shared/NavDropDown/NavDropDown.component';
import { RouterModule } from '@angular/router';
import { DashNavComponent } from './component/shared/DashNav/DashNav.component';
import { DashboradUrlPipe } from '../pipes/DashboradUrl.pipe';
import { CreateCateComponent } from './component/pages/create-cate/create-cate.component';
import { CreateBrandComponent } from './component/pages/create-brand/create-brand.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    CreateProductComponent,
    AddSizesComponent,
    NavDropDownComponent,
    DashNavComponent,
    DashboradUrlPipe,
    CreateCateComponent,
    CreateBrandComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
})
export class AdminModule { }
