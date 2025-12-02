import { Component, computed, signal } from '@angular/core';
import { NgClass } from "@angular/common";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.html',
  imports: [
    // NgClass
  ],
})
export class DragonballPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 4, name: 'Yamcha', power: 500 },
    // { id: 2, name: 'Vegeta', power: 8000 },
    // { id: 3, name: 'Piccolo', power: 3000 },
  ])

  // Clases de CSS en funcion del nivel del poder, para usar en ngclass
  // powerClasses = computed(() => {
    //   return {
      //     'text-danger': true,
      //   }
      // })

  addCharacter() {
    if( !this.name() || !this.power() || this.power() <= 0 ){
      return;
    }

    const newCharacter:Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };

    this.characters.update((list) => [...list, newCharacter])
    // el metodo update tiene una funcion callback. hace un return implicito de la lista anterior con el nuevo personaje.
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0)
  }
}

// recordar el snippet acomponent
