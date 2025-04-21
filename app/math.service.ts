import { createInjectableType } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  Addnums(a:number,b:number)
  {
   
    let c=a+b;
    return c
  }
  dividenums(a:number,b:number):any
  {
   try
   {
    let c=a/b;
    if(b==0)
    {
      throw new Error("u are trying to divide with 0");
    }
    return "the divide of a and b is : "+c;
  }
  catch(error){
    console.log("error...."); 
  }
}
// validateage(nums:number):any{

//   try{
//     if(nums <18)
//     {
//       throw new Error("Inavalid age");
//     }
//     else{
//       throw 
//     }
//   }
// }

}


