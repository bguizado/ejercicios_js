// Dado un arreglo de palabras, utiliza el método map para crear un nuevo arreglo que contenga la primera letra de cada palabra.

const array = ["manzana", "pera", "banana", "naranja", "sandía"];

const primerasLetras = array.map(palabra => palabra.charAt(0));

console.log(primerasLetras);
