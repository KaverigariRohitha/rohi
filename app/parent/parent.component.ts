import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  a:string="hello sr.."
  data:string=''//comes from child
  @ViewChild("d1")st!:ElementRef
  changesettings()
  {
    this.st.nativeElement.innerText="iam very exicted";
    this.st.nativeElement.style.background='red';

  }
  display(p:string)
  {
    this.data=p;
  }

}

