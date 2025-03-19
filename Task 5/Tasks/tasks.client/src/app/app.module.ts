import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';


import { DashboardComponent } from './Admin/dashboard/dashboard.component';

import { AdminCategoryComponent } from './Admin/admin-category/admin-category.component';
import { AdminProductComponent } from './Admin/admin-product/admin-product.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { EditCategoryComponent } from './Admin/edit-category/edit-category.component';
import { EditProductComponent } from './Admin/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AddCategoryComponent,
    RegistrationComponent,
    LoginComponent,
    AdminCategoryComponent,
    AdminProductComponent,

   
    DashboardComponent,
         
         AddProductComponent,
                    EditCategoryComponent,
                    EditProductComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
