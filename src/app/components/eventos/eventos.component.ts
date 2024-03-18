import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  show: boolean=false;

  showMessage(): void{
    this.show = !this.show; // toggle
  }


  // Exemplo ChatGPT
  @HostListener('document:keydown.enter', ['$event'])
  handleEnterKey(event: KeyboardEvent) {
    alert('Você pressionou a tecla Enter!');
    // Faça aqui o que desejar quando a tecla Enter for pressionada
  }
}
