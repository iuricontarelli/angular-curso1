import { Component, Output, EventEmitter } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css'
})
export class ChangeNumberComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()


  handleClick(){
    this.changeNumber.emit();
  }
}
