import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductComponent } from './product/product.component';
import { ProductAddForm2Component } from './product/product-add-form2/product-add-form2.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {path:"products",component: ProductComponent},
  {path:"product-add-1",component: ProductAddForms1Component ,canActivate:[LoginGuard]},
  {path:"product-add-2",component: ProductAddForm2Component},
  {path:"" ,  redirectTo:"products",pathMatch:"full"},
  {path:"login" , component:LoginComponent},
  {path:"products/category/:categoryId" , component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
