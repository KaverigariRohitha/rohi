import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  err:string='';
  constructor(public r:Router)
  {

  }
  validate(frm:any)
  {
    if(frm.uname=="login.username" && frm.pwd=="login.password")
      {
        sessionStorage.setItem("uname",frm.uname)
        console.log("Correct login");
        this.r.navigate(['pizzas'])

      }
      else
      {
           this.err="Invalid username and password!!...";
      }
    
  }
}
