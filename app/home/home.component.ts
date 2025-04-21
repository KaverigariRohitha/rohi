import { Component, RendererType2 } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  result1:string=''
  result2:string=''
  a:number=20;
  b:number=30;
  st:string="test debugging!!";
  bg:string="background:red";
  fg:string="color:yellow";
  heading:string="weloce to home page";
  cssClass:string='';
  cssAction:string='';

  result:number =0
  constructor( public ob:MathService)
  {
    // this.result=ob.Addnums(10,20);
    this.result1="the sum :"+(this.a+this.b)
    this.result2=ob.dividenums(10,4);
  }
  
  add()
  {
    this.result=this.ob.Addnums(10,20);
  }


  setcssAction(action:string): void{
    this.cssAction=action;
  }
  applycss():void{
    if(this.cssAction==='add'){
      this.cssClass='highlight';
    }else if(this.cssAction==='remove'){
      this.cssClass='';
    }

    
  }


  isBoldChecked = false;
  isItalicChecked = false;
  iscolorChecked=false;
  isTextColorChecked = false;
  isUnderlineChecked = false;
  isBorderColorChecked = false;

  toggleStyle(event: Event, style: string) {
  
    const checkbox = event.target as HTMLInputElement; // Access the checkbox element
    switch (style) {
      case 'bold':
        this.isBoldChecked = checkbox.checked;
        break;
      case 'italic':
        this.isItalicChecked = checkbox.checked;
        break;
        case 'background-color':
        this.iscolorChecked = checkbox.checked;
        break;
        case 'textColor':
        this.isTextColorChecked = checkbox.checked;
        break;
      case 'underline':
        this.isUnderlineChecked = checkbox.checked;
        break;
        case 'borderColor':
        this.isBorderColorChecked = checkbox.checked;
        break;
  
    }
}
}
