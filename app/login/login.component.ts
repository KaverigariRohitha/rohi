import { Component } from '@angular/core';
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
    // frm contains all input values
    // alert(frm.uname);
    // uname:admin && password india

    if(frm.uname=="admin" && frm.pwd=="India")
      {
        sessionStorage.setItem("uname",frm.uname)
        this.r.navigate(['product'])

      }
      else
      {
           this.err="Invalid username and password!!...";
      }
    
  }

}
