/*
 * EJERCICIOS DE PRÁCTICA - TYPESCRIPT
 * 
 * Instrucciones:
 * Descomenta el código y completa los ejercicios para practicar los conceptos básicos de TypeScript.
 */

// ==========================================
// 1. Tipos Básicos
// ==========================================

/*
 * Ejercicio 1: Declaración de variables
 * Declara variables con los siguientes tipos:
 * - nombre: string
 * - edad: number
 * - esEstudiante: boolean
 * - hobbies: array de strings
 * - cualquiera: any (intenta evitar usar any en proyectos reales, pero es bueno conocerlo)
 */

// TU CÓDIGO AQUÍ:
// let nombre: string = ...


// ==========================================
// 2. Interfaces y Objetos
// ==========================================

/*
 * Ejercicio 2: Creación de una interfaz
 * Crea una interfaz llamada 'Heroe' que tenga las siguientes propiedades:
 * - nombre: string
 * - edad: number
 * - poder?: string (opcional)
 * - direccion: { calle: string, ciudad: string } (objeto anidado)
 */

// TU CÓDIGO AQUÍ:
// interface Heroe { ... }


/*
 * Ejercicio 3: Uso de la interfaz
 * Crea un objeto constante llamado 'spiderman' que cumpla con la interfaz 'Heroe'.
 */

// TU CÓDIGO AQUÍ:
// const spiderman: Heroe = ...


// ==========================================
// 3. Funciones
// ==========================================

/*
 * Ejercicio 4: Funciones con tipos
 * Crea una función llamada 'sumar' que acepte dos números como argumentos y retorne su suma.
 * Asegúrate de tipar los argumentos y el valor de retorno.
 */

// TU CÓDIGO AQUÍ:
// function sumar(a: number, b: number): number { ... }


/*
 * Ejercicio 5: Funciones de flecha (Arrow Functions)
 * Convierte la función del ejercicio anterior a una función de flecha.
 */

// TU CÓDIGO AQUÍ:
// const sumarFlecha = ...


// ==========================================
// 4. Genéricos (Avanzado)
// ==========================================

/*
 * Ejercicio 6: Función genérica
 * Crea una función llamada 'identidad' que acepte un argumento de cualquier tipo (T) 
 * y retorne ese mismo valor del mismo tipo (T).
 */

// TU CÓDIGO AQUÍ:
// function identidad<T>(arg: T): T { ... }

console.log('Ejercicios listos para resolver!');
