import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { BuypageComponent } from './buypage/buypage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildpageComponent } from './childpage/childpage.component';
import { AssignchildComponent } from './assignchild/assignchild.component';
import { AssignparentComponent } from './assignparent/assignparent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { DiscountPipe } from './discount.pipe';
import { LogoutComponent } from './logout/logout.component';
import { ReversePipe } from './reverse.pipe';
import { WordCountPipe } from './word-count.pipe';
import { TruncatePipe } from './truncate.pipe';
import { FilterPipe } from './filter.pipe';
import { RxdemoComponent } from './rxdemo/rxdemo.component';
import {  HttpClient,HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    ProductComponent,
    BuypageComponent,
    PagenotfoundComponent,
    ParentComponent,
    ChildComponent,
    LifecycleComponent,
    ChildpageComponent,
    AssignchildComponent,
    AssignparentComponent,
    StudentComponent,
    DiscountPipe,
    LogoutComponent,
    ReversePipe,
    WordCountPipe,
    TruncatePipe,
    FilterPipe,
    RxdemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
