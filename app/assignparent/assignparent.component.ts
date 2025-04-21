import { Component } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-assignparent',
  standalone: false,
  templateUrl: './assignparent.component.html',
  styleUrl: './assignparent.component.css'
})
export class AssignparentComponent {
  // day3assignment
  // a:number=0;
  // show(newNum:number){
  //  this.a = newNum;
  // }


// day4assignment
count: number = 0;

constructor(private counterService: CounterService) {
  this.counterService.count$.subscribe((value) => {
    this.count = value;
  });
}

increment() {
  this.counterService.increment();
}


}
