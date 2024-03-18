import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/pages/home/home.component';
import { DashboardComponent } from './component/shared/dashboard/dashboard.component';
import { CreateProductComponent } from './component/pages/create-product/create-product.component';
import { CreateCateComponent } from './component/pages/create-cate/create-cate.component';
import { CreateBrandComponent } from './component/pages/create-brand/create-brand.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'add-item', component: CreateProductComponent },
    { path: 'add-category', component: CreateCateComponent },
    { path: 'add-brand', component: CreateBrandComponent },
  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
