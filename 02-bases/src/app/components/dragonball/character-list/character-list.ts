import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
})
export class CharacterListComponent {
  // Funcion Input: nos dice q va a recibir como argumento info del mundo exterior. En este caso de la lista de personajes del ts de la pagina. dragonball-super-page.ts
  // Tambien creamos una interfaz global para usarla en todas las clases necesarias. Aunq en el otro lugar lo usamos de manera implicito.
  characters = input.required<Character[]>();




}
