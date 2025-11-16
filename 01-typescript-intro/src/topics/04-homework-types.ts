/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    name: string;
    age: number;
    // address: {
    //     calle: string;
    //     pais: string;
    //     ciudad: string;
    // }; Esta manera esta bien tambien pero es mejor usar una interface aparte
    address: Address;
    // showAddress(): string; de las dos maneras esta bien
    showAddress: () => string;
}

interface Address {
    street: string;
    country: string;
    city: string;
}

const superHeroe: SuperHeroe = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        // return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
        return `${ this.name }, ${ this.address.city }, ${ this.address.country }`;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};