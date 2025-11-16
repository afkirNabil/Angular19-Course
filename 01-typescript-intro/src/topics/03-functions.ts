
// asi se define una funcion en JS. TS intenta tratar de definir y hacer la insercion de la funcion. Todas las funciones de JS regresan undefined. Pero no es lo mismo q void. El void significa q no hay un return en la funcion mientras q el undefined significa q si hay un return pero no regresa nada.
function addNumbers(a: number, b: number) {
    return a + b;
}

// Funciones Flecha o Lambda Functions. Viene de JS desde hace pecha.
const addNumbersArrow = (a:number, b:number):string => {
    return `${ a + b }`;
    // esto se conoce como template literal. Se usan las comillas invertidas. Esto nos permite hacer una inyeccon de JS denteo del templete literal.
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}
// el orden de los parametros es: 1. obligatorios, 2. opcionales, 3. opcionales con valor por defecto. Cuando son mas de 3 valores se aconseja usar un objeto como parametro.

// const resultAsString: string = addNumbers(1, 2).toString();
// const resultAsNumber = addNumbers(1, 2);
// const resultArrow = addNumbersArrow(3, 5);
// const multiplyResult = multiply(5);

// console.log({ resultAsNumber, resultArrow, multiplyResult });
// si ponemos la variable la muestra como un objeto, la clave es el nombre de la variable y el valor es el valor de la variable.
// -------------------------------------------------------------------------
interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}
// la interfaz es para definir el tipo de datos de las propiedades del obteto. Aqui vemos q podemos usar una funcion como propiedad del objeto.

const healCharacter = ( character: Character, amount: number) => {
    character.hp += amount;
}

const strider = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`);
    }
};

healCharacter( strider, 20 );
strider.showHp();

export {};
// esto en Angular no hay q hacerlo, es solo para TS puro.