

// export function whatsMyType( argument: any ): any {
//     return argument;
// }
// Siempre indicar el tipo de argumento d una funcion. Pq sino cuando devuelve un valor, lo devuleve con tipo any.
// Y el intellisense d VSCode no te ayuda para mostrar los metodos o funciones q tiene ese tipo de variable concreto q devuelve. Enontces programar s hace mas dificil. Pq la funcion devuelve any.
// La solucion es usar genericos, segun el tipo de dato del argumente devuelve un tipo de dato diferente.
export function whatsMyType<T>( argument: T ): T {
    return argument;
}

const amIAString = whatsMyType<string>( 'Hello World' );
const amIANumber = whatsMyType<number>( 12345 );
const amIAArray = whatsMyType<number[]>( [1,2,3,4,5] );
// Usamos let par ver el tipo de variable q se le asigna al ser el mismo tipo q el arguemnto de la funcion y el mismo tipo de valor d retorno,
// Los genericos indican, esta funcion tiene un arguemnto sin tipo, q depende del tipo q se le pase y el tipo del valor de retorno tambien depende del tipo de arguemnto q le pasen.

console.log( amIAString.split(' ') );
console.log( amIANumber.toFixed() );
console.log( amIAArray.join('-') );