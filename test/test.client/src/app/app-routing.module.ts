import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProdectComponent } from './prodect/prodect.component';

const routes: Routes = [
  { path: "Register", component: RegisterComponent },
  { path: "Login", component: LoginComponent },
  { path: "Home", component: HomeComponent },
  { path: "Prodect", component:ProdectComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
