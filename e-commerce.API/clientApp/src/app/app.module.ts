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
import { HomeComponent } from './components/user_view/home_view/home/home.component';
import { ProductListComponent } from './components/user_view/product_view/product-list/product-list.component';
import { RegisterComponent } from './components/user_view/forms/register/register.component';
import { NotFoundComponent } from './components/user_view/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ProductFillterComponent } from './components/user_view/product_view/product-fillter/product-fillter.component';
import { ProductCardComponent } from './components/user_view/product_view/product-card/product-card.component';
import { CitySelectingComponent } from './components/user_view/header/CitySelecting/CitySelecting.component';
import { LoginComponent } from './components/user_view/forms/login/login.component';
import { SearchComponent } from './components/user_view/header/Search/Search.component';
import { FixedPipe } from './pipes/fixed-pipe.pipe';
import { SearchPipe } from './pipes/Search.pipe';
import { CarouselModule, OwlOptions, CarouselComponent } from 'ngx-owl-carousel-o';
import { ProductDetailsComponent } from './components/user_view/product_view/ProductDetails/ProductDetails.component';
import { ProductSlidesComponent } from './components/user_view/product_view/ProductSlides/ProductSlides.component';
import { SharedService } from './services/Shared.service';
import { HomeSlidesComponent } from './components/user_view/home_view/home-slides/home-slides.component';
import { CategoryCardComponent } from './components/user_view/home_view/category-card/category-card.component';
import { BrandComponent } from './components/user_view/home_view/Brand/Brand.component';
import { FooterSectionComponent } from './components/user_view/footer/FooterSection/FooterSection.component';
import { LoadingScreenComponent } from './components/user_view/LoadingScreen/LoadingScreen.component';

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
    LoginComponent,
    SearchComponent,
    FixedPipe,
    SearchPipe,
    ProductDetailsComponent,
    ProductSlidesComponent,
    HomeSlidesComponent,
    CategoryCardComponent,
    BrandComponent,
    FooterSectionComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    CarouselModule,
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
