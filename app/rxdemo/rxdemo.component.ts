import { Component } from '@angular/core';
import { from, fromEvent, interval } from 'rxjs';
import { Observable } from 'rxjs';
import { StudentdetService , Istudent} from '../studentdet.service';

@Component({
  selector: 'app-rxdemo',
  standalone: false,
  templateUrl: './rxdemo.component.html',
  styleUrl: './rxdemo.component.css'
})
export class RxdemoComponent {
  fd:any;error:any;
  studarray:Istudent[]=[]
studarray1:any
constructor(public ob:StudentdetService){}

studentdata!:Istudent;
  displaystudents()
  {
this.ob.readstudent().subscribe(result=>this.studarray=result)
  }


  displaystudentbyid(id:any)
  {
    //alert(id)
   return this.ob.readstudentbyid(id).subscribe(c=> this.studentdata= c)
  }
 



addnewstudents()
  {
    var id1=(document.getElementById("t1") as HTMLInputElement).value
  var name=(document.getElementById("t2") as HTMLInputElement).value
  var mark=(document.getElementById("t3") as HTMLInputElement).value
     var res={id:id1,studentname:name,totalmarks:mark}
  

 this.ob.addstudent(res).subscribe(c=>this.studarray1=c)
    alert("data added ")

  
  
   }
   delete(id:any){
     this.ob.deletestudent(id).subscribe(c=>
      {alert("data deleted")
        
      })
    
   }
     
    


  fromdemo()
  {
    //logic to expose a data in async format
    //from returns observable type
   let country=  from (["india","canada","uk","us"]);
   //how to dispaly data fro user?
   country.subscribe(item =>{
    // console.log("data :"+item)
    this.fd = item
   }); 
  }

   interval()
   {
  const timer$ = interval(1000);
  timer$.subscribe(val =>{
    console.log('interval value:',val);
  });
}
  
  fromEvent()
  {
    const button = document.getElementById('clickbtn')!;
    const click$ = fromEvent(button,'click');
    click$.subscribe(() =>{
      console.log('button clocked!')
    });
  }

  observabledemo()
  {
    const o= new Observable(obs =>{
    
       obs.next('hello'); //sends data 1 by 1
       obs.next('world');
       obs.complete();});  //represents end of the data
    
       // read data 1 by 1
       o.subscribe({ next: val => console.log(val),
        //message to be printed once list is completed
        complete: () => console.log('Done!')

       });
  }
}