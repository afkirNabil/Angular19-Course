// ejercicio para comprender algunas generalidades de los decoradores en TypeScript.

function classDecorator<T extends { new(...args:any[]): {} }>(
    // El operador rest para unir todos los argumentos del constructor en un solo array de cualquier tipo.
    constructor: T
    // Deberia d ser d tipo Generico.
) {
    return class extends constructor {
        newProperty: string = 'New Property';
        hello: string = 'Override';
    }
}

// Este decorador puede añadir nuevas propiedades o nuevo comportamiento a la clase.
@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123';

    print() {
        console.log('Hola Mundo!!!');
    }
}

// Imprimo la definicion de la Clase.
console.log( SuperClass );

// Imprimo la instancia de la Clase.
const myClass = new SuperClass();
console.log( myClass );