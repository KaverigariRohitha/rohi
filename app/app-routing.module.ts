import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent} from './register/register.component';
import { PizzasComponent} from './pizzas/pizzas.component';
import { BuypizzaComponent } from './buypizza/buypizza.component';
import { OrderComponent} from './order/order.component';
import { LogoutComponent } from './logout/logout.component';
import { securityguardGuard } from './securityguard.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
    {
      path:'login',
      component:LoginComponent
    },
    {
      path:'register',
      component:RegisterComponent
    },
    {
      path:'buypizza',
      component:BuypizzaComponent,
      canActivate:[securityguardGuard]
    },
    {
      path:'order',
      component:OrderComponent
    },
    {
      path:'pizzas',
      component:PizzasComponent
    },
    {
      path:'home',
      component:HomeComponent
    },
    {
      path:'logout',
      component:LogoutComponent
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
