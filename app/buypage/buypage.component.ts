import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buypage',
  standalone: false,
  templateUrl: './buypage.component.html',
  styleUrl: './buypage.component.css'
})
export class BuypageComponent {

  q:number= 0;

  pid:string='';
  pname:string='';
  price:number=0;
  desciption:string='';
  image:string='';
  constructor(public ob:ActivatedRoute)
  {
    // logic to assign the value for a variable comes fro querry params
    // in the url there are many query parameters 
    // in the form of key value pair..
    // subscribe method will read all key values and load in data objet..
    ob.queryParams.subscribe(data => {
      this.pid=data["a"],
      this.pname=data["b"],
      this.price=data["c"],
      this.desciption=data["e"],
      this.image=data["d"]
  })

}
}
