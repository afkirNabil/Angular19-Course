

export interface Passenger {
    name: string;
    children?: string[];
    // ESto no es el optional-chaining. Es cuando lo usamos abajo. Aqui indica q es una proipedad opcional.
}

const passenger1: Passenger = {
    name: 'Nabil',
};
    
const passenger2: Passenger = {
    name: 'Laura',
    children: ['Chloe', 'Famara'],
};

// const printChildren = ( passenger: Passenger ) => {
const returnChildrenNumber = ( passenger: Passenger ): number => {
    const howManyChildren = passenger.children?.length || 0;
    // si ese valor es nulo o no viene, ejecuta la otra parte. Y le asigna el cero.

    // const howManyChildren = passenger.children!.length;
    // ! non-null assertion operator
    // Siempre me llega children, hice una verifcacion previa porejemplo.
    // Con el signo de admiracion indica, Siempre vas a recibir la propiedad hijos.
    // console.log( passenger.name, howManyChildren )

    return howManyChildren
}

// returnChildrenNumber( passenger1 );
console.log( returnChildrenNumber( passenger2 ) )
console.log( returnChildrenNumber( passenger1 ) )