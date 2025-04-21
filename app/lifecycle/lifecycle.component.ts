import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: false,
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent {
product={
name: 'iPhone 15',
price: 1299.99,
releaseDate: new Date(2024, 8, 15)
};
users = ['Alice', 'Bob', 'Charlie', 'David'];
searchTerm = 'bng ';
}
