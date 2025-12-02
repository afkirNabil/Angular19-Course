import { ChangeDetectionStrategy, Component, signal } from "@angular/core";


@Component({
  templateUrl: './counter-page.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  // Es una manera de demostrar cuando estamos trabajando con zone.js o zoneless.
  // Puede q en un futuro on push sea la opcion por defecto. S puede establecer de manera global.
  // OnPush indica q estamos trabjanod con señeles. Y sin zone.js. Es decir zoneless.
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  // constructor() {
  //   setInterval(() => {
  //     // this.counter += 1;
  //     // this.counterSignal.update( (v) => v + 1 );
  //     this.increaseByOne(1);
  //     console.log('tick')
  //   }, 2000);
  // }

  constructor() {

  }

  increaseByOne(value: number){
    this.counter += value;
    this.counterSignal.update( (currentValue) => currentValue + value );
  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
