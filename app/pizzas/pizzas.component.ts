import { Component } from '@angular/core';
import { PizzadetService } from '../pizzadet.service';
import { ipizza } from '../pizzadet.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizzas',
  standalone: false,
  templateUrl: './pizzas.component.html',
  styleUrl: './pizzas.component.css'
})
export class PizzasComponent {
  pizzaarray:ipizza[]=[];
    constructor(public ob:PizzadetService)
    {
      this.ob.getpizzadet().subscribe(result => {
        console.log(result); this.pizzaarray = result}) 
    }
}
