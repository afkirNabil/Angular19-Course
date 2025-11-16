
const skills: string[] = ['Bash', 'Counter', 'Healing'];
// usamos siempre const, cuando necesitemos reasignar, usamos let. Ya nos salta el mensaje por si solo.

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing'],
}
// El problema aqui es q no podeos tipar las propiedades del objeto. Una de las maneras de solucionarlo es creando una interface. Las interfaces no se transpilan a JS, son solo para TS.

strider.hometown = 'Rivendell';

console.table(strider);

export {};
// Transforma este archivo en un modelo, aunq a mi este error no me salta.