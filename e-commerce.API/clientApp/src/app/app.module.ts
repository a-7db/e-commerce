import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/user_view/header/header/header.component';
import { NavbarComponent } from './components/user_view/header/navbar/navbar.component';
import { HomeComponent } from './components/user_view/home/home.component';
import { ProductListComponent } from './components/user_view/product_view/product-list/product-list.component';
import { RegisterComponent } from './components/user_view/register/register.component';
import { NotFoundComponent } from './components/user_view/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ProductFillterComponent } from './components/user_view/product_view/product-fillter/product-fillter.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    ProductListComponent,
    RegisterComponent,
    NotFoundComponent,
    ProductFillterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
