import { Component, signal } from '@angular/core';
import { ContainerTabelaComponent } from './container-tabela/container-tabela.component';

@Component({
  imports: [ContainerTabelaComponent],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class App {
  protected readonly title = signal('agro-sensor-web');
}
