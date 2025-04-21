import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { checkalphabet } from './uservalidate';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
 f:any;
 constructor()
 {
   this.f=new FormGroup({
    uname: new FormControl("admin",[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
    em: new FormControl("",[Validators.required,Validators.email]),
    msg: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(6)]),
    address:new FormControl("",[checkalphabet])


 })
}








}
