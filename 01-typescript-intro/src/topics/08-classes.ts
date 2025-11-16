

export class Person {
    // public name: string;
    // private address: string;

    // constructor( name: string, address: string ) {
    //     this.name = name;
    //     this.address = address;
    // }

    // Esta es la forma Corta de definiar Clases en TS. 
    constructor( 
        public firstName: string,
        public lastName: string,
        private address: string = "No address"
    ) 
    {}
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super(realName, 'Meryland')
//     }
// }

export class Hero {

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
    //    this.person = new Person( realName );
    // Lo malo de hacerlo d esta manera es q si cambia el constructor de la Clase q estamos inicializando aqui, nos va a fallar aqui tambien. Por lo tanto es mejor instanciarla fuera.
    }
}

const tony = new Person( 'Tony', 'Stark', 'Meryland' ); 
// Si la clases cambia, solo hay q cambiarlo aqui. Y no en la clase q compone tambien. Por eso es mejor instanciar el constructor fuera.
const ironman = new Hero( 'Ironman', 45, 'Tony', tony );
// Aunq t lo marque como error s sigue mostrando en consola. Pero se ve el error en el editor. 
// ironman.address = 'New York, USA';
// console.log(ironman.address);

console.log( ironman );