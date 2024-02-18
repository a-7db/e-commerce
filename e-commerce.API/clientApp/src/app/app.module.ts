import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/user_view/header/header/header.component';
import { NavbarComponent } from './components/user_view/header/navbar/navbar.component';
import { HomeComponent } from './components/user_view/home/home.component';
import { ProductListComponent } from './components/user_view/product_view/product-list/product-list.component';
import { RegisterComponent } from './components/user_view/forms/register/register.component';
import { NotFoundComponent } from './components/user_view/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ProductFillterComponent } from './components/user_view/product_view/product-fillter/product-fillter.component';
import { ProductCardComponent } from './components/user_view/product_view/product-card/product-card.component';
import { CitySelectingComponent } from './components/user_view/header/CitySelecting/CitySelecting.component';
import { LoginComponent } from './components/user_view/forms/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    ProductListComponent,
    RegisterComponent,
    NotFoundComponent,
    ProductFillterComponent,
    ProductCardComponent,
    CitySelectingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
