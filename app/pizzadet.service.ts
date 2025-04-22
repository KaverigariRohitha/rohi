import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzadetService {
  constructor(public h:HttpClient) { }
  getpizzadet(): Observable<ipizza[]> {
    return this.h.get<ipizza[]>("http://localhost:3000/pizzas"); 
  }
}
export interface ipizza{
  id:number
  toppings:string;
  sauce:string;
  size:string;
  Features:string;
  price:number;
  image:string;
}
