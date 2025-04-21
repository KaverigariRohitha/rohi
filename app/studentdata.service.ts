import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentdataService {

  constructor(public h:HttpClient) { 
    // h.get(); R // read data from the server 
    // h.post(); C // send data to the server
    // h.put(); U // update data
    // h.delete(); D // dalete data
      
  }
    readstudents()
    {
     return this.h.get<Istudents[]>("http://localhost:3000/students")
    }
    readstudentbyid(id:any):Observable<Istudents>
    {
     this.h.get<Istudents>("http://localhost:3000/students/"+id)
    }
    
}
export interface Istudents{
  id:number;
  studentname:string;
  totalmarks:number;
}