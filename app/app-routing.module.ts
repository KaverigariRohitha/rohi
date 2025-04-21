import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BuypageComponent } from './buypage/buypage.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { AssignparentComponent } from './assignparent/assignparent.component';
import { AssignchildComponent } from './assignchild/assignchild.component';
import { StudentComponent } from './student/student.component';
import { securityguardGuard } from './securityguard.guard';
import { LogoutComponent } from './logout/logout.component';
import { RxdemoComponent } from './rxdemo/rxdemo.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'buypage',
    component:BuypageComponent,
    canActivate:[securityguardGuard]
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'parent',
    component:ParentComponent
  },
  {
    path:'child',
    component:ChildComponent
  },
  {
    path:'assignparent',
    component:AssignparentComponent
  },
  {
    path:'assignchild',
    component:AssignchildComponent
  },
  {
    path:'lifecycle',
    component:LifecycleComponent
  },
  {
    path:'rx',
    component:RxdemoComponent
  },
  {
    path:'student',
    component:StudentComponent
  },


  {
    path:'',
    component:HomeComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
