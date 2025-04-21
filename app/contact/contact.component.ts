import { Component, OnInit } from '@angular/core';
import { GreetingService } from '../greeting.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  // template:`<h1> {{greeting}}</h1> <hr>`,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  greeting :string='';
  constructor(private greetingServices:GreetingService)
  {

  }
  ngOnInit():void
  {
    const name='rohitha';
    this.greeting=this.greetingServices.greet(name);
  }

}
