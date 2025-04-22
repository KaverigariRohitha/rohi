import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { checkalphabet } from './uservalidate';
import { PizzadetService } from '../pizzadet.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  countries = ['India', 'USA', 'UK', 'Canada', 'Australia'];
 constructor(private userService:PizzadetService)
 {
  onSubmit(form: any): void {
    if (form.valid) {
      this.userService.register(form.value).subscribe(
        (response: any) => {
          alert('User registered successfully');
          console.log('User registered successfully', response);
        },
        (error: any) => {
          console.error('Error occurred:', error);
        }
      );
    }
  }
   


 });

}
}
