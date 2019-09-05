import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { ShopComponent } from './shop/shop.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent,
    ContactusComponent,
    SignupComponent,
    ShopComponent,
    ProductdetailsComponent
    
  ],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot([
      {
         path: '',
         component: HomeComponent
      },
      {
        path: 'index',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
     },
     {
      path: 'signup',
      component: SignupComponent
    },
     {
      path: 'cart',
      component: CartComponent
    },
    {
      path: 'productdetails',
      component: ProductdetailsComponent
    },
    {
      path: 'shop',
      component: ShopComponent
    },
      {
        path: 'checkout',
        component: CheckoutComponent
    },
    {
      path: 'contactus',
      component: ContactusComponent
    },
     {
      path: '**',
      component: HomeComponent
   }
   ]),
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
