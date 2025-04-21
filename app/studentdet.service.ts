import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentdetService {

  constructor(public h:HttpClient) { 
    // h.get(); R // read data from the server 
    // h.post(); C // send data to the server
    // h.put(); U // update data
    // h.delete(); D // dalete data
      
  }
  readstudent(){
    return this.h.get<Istudent[]>("http://localhost:3000/student")
  }
  readstudentbyid(id:any):Observable<Istudent>
{
return this.h.get<Istudent>("http://localhost:3000/student/"+id)
}
addstudent(data:any):Observable<Istudent>
{
return  this.h.post<Istudent>("http://localhost:3000/student",data)
}
deletestudent(id:any):Observable<Istudent>
{
 return  this.h.delete<Istudent>("http://localhost:3000/student/"+id)
}
private handleError(error: HttpErrorResponse) {
  
  return throwError(() => new Error(error.message));
}


 }
 export  interface Istudent{
   id:number;
   studentname:string
   totalmarks:number
  }

