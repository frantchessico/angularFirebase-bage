import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';

const routes: Routes = [
  { path : '', redirectTo: '/products', pathMatch: 'full', canActivate: [AuthGuard]},
  { path:'products', component: ListProductComponent , canActivate: [AuthGuard]},
  { path:'products/add', component: AddProductComponent , canActivate: [AuthGuard]},
  { path:'products/edit/:id', component: EditProductComponent , canActivate: [AuthGuard]},
  { path:'products/:id', component: ShowProductComponent , canActivate: [AuthGuard]},
  { path:'register', component: RegisterComponent },
  { path:'login', component: LoginComponent },
  { path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
