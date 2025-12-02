import { Component, signal } from '@angular/core';
import { Wheel } from './wheel/wheel';

@Component({
  selector: 'app-root',
  imports: [Wheel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('spinning-wheel-app');
}
