import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/user_view/home/home.component';
import { ProductListComponent } from './components/user_view/product_view/product-list/product-list.component';
import { NotFoundComponent } from './components/user_view/not-found/not-found.component';
import { RegisterComponent } from './components/user_view/forms/register/register.component';
import { ProductDetailsComponent } from './components/user_view/product_view/ProductDetails/ProductDetails.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:name', component: ProductListComponent },
  { path: 'product/:slug', component: ProductDetailsComponent },
  { path: 'create-account', component: RegisterComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
