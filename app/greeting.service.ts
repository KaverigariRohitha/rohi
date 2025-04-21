import { Injectable } from '@angular/core';
import { TimeService } from './time.service';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {
  constructor(private timeService:TimeService)
   { 

  }

  greet(name:string):string{
    const hour=this.timeService.getCurrentHour();
    let greeting:string;
    if(hour<12)
    {
      greeting='Good morning';
    }
    else if(hour>12 && hour<16)
    {
      greeting='Good afternoon';
    }
    else if(hour>16 && hour<20 )
    {
      greeting='good evening';
    }
    else{
      greeting='Good Night';
    }
    return `${greeting} , ${name}`


  }

  
}
