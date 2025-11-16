
export interface Product {
    description: string;
    price: number;
}
// D esta manera exportamos al mundo exterior la interfaz. Toda la aplicacion va a usar esa misma interfaz.

// const phone: Product = {
//     description: 'Smartphone XYZ',
//     price: 400.0
// }

// const tablet: Product = {
//     description: 'Tablet XYZ',
//     price: 560.0
// }

// Una interfaz para el objeto de argumentos de la funcion. Aunq son solo dos. Pueden crecer en un futuro.
interface TaxCalculationOptions {
    products: Product[];
    tax: number;
}


export function taxCalculation( options: TaxCalculationOptions ): [number, number] {
// function taxCalculation( { products, tax }: TaxCalculationOptions ): [number, number] {
    
    let total = 0;
    const { products, tax } = options;
    products.forEach( ({ price }) => {
        total += price;
    })

    return [total, total * tax];
}


// const shoppingCart = [phone, tablet];
// const tax = 0.10;


// const [total, taxTotal] = taxCalculation({
//     products: shoppingCart,
//     tax: tax 
//     //tax
//     //puedes poner solo tax, pq ecmascript entiende que le estas asignanado el valor de la variable tax al arguemtno con nombre tax. Entonces busca el parametro tax q se llama igual q la variable tax. Se puede hacer lo mismo con products
// });

// console.log('Total: ', total);
// console.log('Tax: ', taxTotal);

// Tarea: Hacer la destructuring en todo el ejercicio. 
// En los argumentops de taxCalculation q es un objeto. S puede hacer d varias maneras. HECHO
// En el resultado. Pq es un Arreglo. HECHO
// Y en el producto, pq lo unico q necestio es el precio. MEDIO HECHO



export {}