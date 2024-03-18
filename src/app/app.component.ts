import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'Fulano';

  userData = {
    email: 'fulano@gmail.com',
    role: 'Admin',
  };

  title = 'curso-angular';
}
