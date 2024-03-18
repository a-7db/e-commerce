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
import { AdminModule } from './admin-module/admin.module';
import { AdminRoutingModule } from './admin-module/admin-module-routing.module';
import { UserRouterComponent } from './components/user-router/user-router.component';
import { AppearanceAnimation, ButtonLayoutDisplay, ButtonMaker, DialogLayoutDisplay, NgxAwesomePopupModule, ToastNotificationConfigModule, ToastPositionEnum, ToastProgressBarEnum, ToastUserViewTypeEnum } from '@costlydeveloper/ngx-awesome-popup';

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
    LoadingScreenComponent,
    UserRouterComponent
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
    AdminRoutingModule,
    NgxAwesomePopupModule.forRoot({
      colorList: {
        primary: '#ff9e00', // optional
        secondary: '#989ea5', // optional
        info: '#2f8ee5', // optional
        success: '#3caea3', // optional
        warning: '#ffc107', // optional
        danger: '#e46464', // optional
        light: '#fbfbfb', // optional
        dark: '#343a40', // optional
        customOne: '#34fa40', // optional
        customTwo: '#343f40'  // optional (up to custom five)
      }
    }),
    ToastNotificationConfigModule.forRoot({
      toastCoreConfig: {
        toastPosition: ToastPositionEnum.TOP_LEFT, // check API documentation ToastPositionEnum
        progressBar: ToastProgressBarEnum.DECREASE, // check API documentation ToastprogressBarEnum
        toastUserViewType: ToastUserViewTypeEnum.SIMPLE, // check API documentation toastUserViewTypeEnum
        layoutType: DialogLayoutDisplay.SUCCESS, // check API documentation DialogLayoutDisplay
        buttonPosition: 'right', // check API documentation VerticalPosition
        textPosition: 'right', // check API documentation VerticalPosition
        confirmLabel: 'Confirm', // default confirmation button label
        declineLabel: 'Decline', // default declination button label
        autoCloseDelay: 3000, // Milliseconds it will be ignored if buttons are included.
        disableIcon: true, // Disable icon by default
        allowHtmlMessage: true,
      },
      globalSettings: {
        allowedNotificationsAtOnce: 2  // The number of toast notifications that can be shown at once.
      },
      // custom buttons overrides the buttons set with confirmLabel & declineLabel
      buttons: [
        new ButtonMaker('Ok', 'ok', ButtonLayoutDisplay.PRIMARY), // check API documentation ButtonLayoutDisplay
        new ButtonMaker('Cancel', 'cancel', ButtonLayoutDisplay.SECONDARY)
      ]
    }),
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
