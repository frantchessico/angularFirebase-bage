import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { AddProductComponent } from './components/add-product/add-product.component';

import { FormsModule } from '@angular/forms';

//Import angular fire modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FlashMessagesModule } from 'angular2-flash-messages';

import { environment } from 'src/environments/environment.prod';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    ShowProductComponent,
    EditProductComponent,
    ListProductComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
