import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";
import { UpperCasePipe } from "@angular/common";


@Component({
  templateUrl: './hero-page.html',
  imports: [UpperCasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    const description =  `${ this.name() } - ${ this.age() }`;
    return description;
  })

  capitalizedName = computed(() => this.name().toUpperCase() )

  // getHeroDescription() {
  //   return `${ this.name() } - ${ this.age() }`
  //   // Para acceder al valor de los signals, hacerlo de esta manera como invocando metodos o funciones sin argumentos.
  // }
  // Lo sustitumos por señales computadas - ReadOnlySignals

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge(age: number) {
    this.age.set(age);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

}
