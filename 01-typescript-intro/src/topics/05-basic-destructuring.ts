interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

// dos interfaces q por si solas no hacen nada pero q nos ayudan a moldear nuestro objeto
const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 200,
    song: "Messing Around",
    details: {
        author: "Mrs WW - Dale",
        year: 2016
    }
}

// Destructuring de un objeto, es lo q vimos con Astro y midudev.
// Crea esas constantes con los mismos nombres de las propiedades del objeto. Y su valores.
// Se puede cambiar el nombre de esas constantes por el q nosotros queramos. Por si hay alguna otra constante con el mismo nombre.
const song = "Another Brick in the Wall";
const { 
    song:anotherSong,
    songDuration:duration,
    // details:{ author:artist }
    //esta es una manera de destructural el diccionario anidado epro puede ser dificil de verlo visualmente.
    details
} = audioPlayer;
const { author:artist } = details;
// De esta manera priorizas la legibilidad del codigo. A la velocidad de unos microsegundos

// Esta seria la manera de acceder a un propiedad de un objeto sin destructuring.
// console.log(`Song: ${anotherSong}`);
// console.log(`Duration: ${duration}`);
// console.log(`Author: ${artist}`);

// DESETRUCTURING DE UN ARRAY
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const trunks = dbz[3] || 'No hay personaje';
// Esto se puede hacer pero es mejor con la desestructuracion de arreglos.

const [ , , trunks = 'No hay personaje' ]: string[] = ['Goku', 'Vegeta'];
// Con las comillas nos saltamos las posiciones q no queremos.
console.error('Personaje 3: ', trunks);



export {};