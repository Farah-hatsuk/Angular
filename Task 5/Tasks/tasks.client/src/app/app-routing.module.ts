import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AdminCategoryComponent } from './Admin/admin-category/admin-category.component';
import { AdminProductComponent } from './Admin/admin-product/admin-product.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { EditCategoryComponent } from './Admin/edit-category/edit-category.component';
import { EditProductComponent } from './Admin/edit-product/edit-product.component';



const routes: Routes = [
  { path: "category", component: CategoryComponent },
  { path: "product/:id", component: ProductsComponent },
  { path: "productDetalis/:id", component: ProductDetailsComponent },

  { path: "Registration", component: RegistrationComponent },
  { path: "Login", component: LoginComponent },
  

  {
    path: "Dashboard", component: DashboardComponent, children: [
      { path: "getCategory", component: AdminCategoryComponent },
      { path: "getProduct", component: AdminProductComponent },
      { path: "addCategory", component: AddCategoryComponent },
      { path: "addProduct", component: AddProductComponent },
      { path: "editCategory/:id", component: EditCategoryComponent },
      { path: "editProduct/:id", component: EditProductComponent }

     
    ]
     
    
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
