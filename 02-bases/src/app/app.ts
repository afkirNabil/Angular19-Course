import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/shared/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  // standalone: true, Angular 19 trae esto por defecto. Es para q se comporte como un compenente independiente.
})
export class App {
  protected readonly title = signal('Nabil Afkir');
}
