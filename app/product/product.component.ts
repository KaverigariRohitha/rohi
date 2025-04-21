import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { DiscountPipe } from '../discount.pipe';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  arr:string[]=["india","canada","uk"]

//   prod:IProd[]=
//  [
//   {pid:'p001', pname:'watch', price:120,description:'watch', pimage:'/assets/b.jpg'},
//   {pid:'p002', pname:'car', price:100, description:'car...', pimage:'/assets/car.jpg'},
//   {pid:'p003', pname:'mouse', price:500, description:'mouse..', pimage:'/assets/mouse.jpg'},
//   {pid:'p004', pname:'tv', price:5200, description:'tv..', pimage:'/assets/tv.jpg'},
//   {pid:'p005', pname:'projector', price:20, description:'projector', pimage:'/assets/projector.jpg'},
//   {pid:'p006', pname:'fan', price:5000,description:'fan...!!!', pimage:'/assets/power.jpg'},

// ]

isImageVisible = false; // Tracks the image visibility state

toggleImage() {
  this.isImageVisible = !this.isImageVisible; // Toggles the visibility state
}

// interface IProd
// {
//   pid:string;
//   pname:string;
//   price:number;
//   description:string;
//   pimage:string;
// }

b:any[]=[]

  constructor(public ob:DataService)
  {
     this.b=this.ob.prod;
  }
  hi()
  {
    console.log("products constructor called");
  }

}


