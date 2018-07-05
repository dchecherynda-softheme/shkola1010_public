import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule
} from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './product/product.module';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    SharedModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
