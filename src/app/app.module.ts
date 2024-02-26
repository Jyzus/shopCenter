import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoaderComponent } from './components/ui/loader/loader.component';
import { InputComponent } from './components/ui/input/input.component';
import { ProductComponent } from './components/product/product.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CartComponent,
    LoaderComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputComponent,
    ButtonComponent,
    FormsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
