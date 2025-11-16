// let name = 'Nabilazo en variable';
// a el aqui le salta un error "cannot redeclare block-scoped variable 'name'".
// Esta pasa pq estamos trabajando en un proyecto, vite piensa q nosotros vamos a unificar todfos nuestros archivos ts en uno solo. En angular esto no pasa.

// const name_1 = 'Nabilazo en constante';
// lo ideal es usar const hasta q se necesite cambiar el valor. Ahi susituimos por let.
// si dejas el cursos encima de la constante te aparece, su valor y no el tipo como en las variables.

const name_2: string = 'Nabilazo';
let hpPoints: number | 'FULL' = 95;
const isAlive: boolean = true;

console.log({ 
    name_2, hpPoints, isAlive 
});

export {};
// lo soluciona con el export, estamos exportando un objeto.
// Le indica q este arcihvo es un modulo.