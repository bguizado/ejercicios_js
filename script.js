// Dado un arreglo de palabras, utiliza el método filter para crear un nuevo arreglo que contenga solo las palabras que tengan más de 4 caracteres.

let array = ["manzana", "pera", "banana", "naranja", "sandía", "uva", "kiwi", "mango", "piña", "cereza"];

let arrayCuatroLetras = array.filter(palabra => palabra.length > 4);

console.log(arrayCuatroLetras);