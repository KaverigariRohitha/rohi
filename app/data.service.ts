import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService
 {
  // myArray: string[] = ['manu', 'pallavi', 'rohitha']
  // getArray(): string[] 
  // {
  //   return this.myArray;
  // }
  prod:IProd[]=
  [
   {pid:'p001', pname:'watch', price:120,description:'watch', pimage:'/assets/b.jpg'},
   {pid:'p002', pname:'car', price:100, description:'car...', pimage:'/assets/car.jpg'},
   {pid:'p003', pname:'mouse', price:500, description:'mouse..', pimage:'/assets/mouse.jpg'},
   {pid:'p004', pname:'tv', price:5200, description:'tv..', pimage:'/assets/tv.jpg'},
   {pid:'p005', pname:'projector', price:20, description:'projector', pimage:'/assets/projector.jpg'},
   {pid:'p006', pname:'fan', price:5000,description:'fan...!!!', pimage:'/assets/power.jpg'},
 
 ]
  constructor() { }
}
interface IProd
{
  pid:string;
  pname:string;
  price:number;
  description:string;
  pimage:string;
}
