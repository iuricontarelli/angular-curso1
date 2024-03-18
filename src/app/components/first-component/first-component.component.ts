import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name: String = 'Davi';
  age: number = 30;
  job = 'Programador';
  hobbies = ['Correr', 'Jogar', 'Estudar']
  car = {
    name_car: 'Fiesta',
    year: 2000,
  }

}
