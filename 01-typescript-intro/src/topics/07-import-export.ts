import { taxCalculation, type Product } from './06-function-destructuring'
// voy a destructurar algo de este path del fichero q tiene la pieza q m interesa importar

const shoppingCart: Product[] = [ //El error q saltaba aqui, s soluciona con []
    {
        description: 'Smartphone XYZ',
        price: 400.0
    },
    {
        description: 'Tablet XYZ',
        price: 560.0
    }
]
// Ya tengo la interfaz Product ya definida en otro fichero
const [ total, tax ] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
});

console.log('Total: ', total);
console.log('Tax: ', tax);