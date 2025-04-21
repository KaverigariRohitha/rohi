import { Component ,contentChild,ElementRef,EventEmitter,Input,Output } from '@angular/core';
import { CounterService } from '../counter.service';
@Component({
  selector: 'app-assignchild',
  standalone: false,
  templateUrl: './assignchild.component.html',
  styleUrl: './assignchild.component.css'
})
export class AssignchildComponent {
  // day3 assignment
  // @Input() num:number=0;
  //   @Output() 
  //    myevent:EventEmitter<number> = new EventEmitter<number>;
  //    increment(){
  //     //code to run the event
  //     this.num=this.num+1
  //     this.myevent.emit(this.num)
  //    };

    // day4 assignment

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
