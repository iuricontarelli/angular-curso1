import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent implements OnInit{
  size = 40;
  font = 'Arial';
  color = 'red';

  classes = ['green-title', 'small-title'];

  underline = 'underline-title';

  constructor() {}

  ngOnInit(): void {
    
  }

}
