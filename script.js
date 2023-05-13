// Dado un arreglo de palabras, utiliza un bucle y condicionales para crear un nuevo arreglo que contenga solo las palabras que tienen más de 5 caracteres.
// Luego, utiliza el método map para convertir cada palabra en mayúsculas.

let array = ["manzana", "pera", "banana", "naranja", "sandía", "uva", "kiwi", "mango", "piña", "cereza"];
let nuevoArray = [];

for(let caracter = 0; caracter < array.length; caracter++ ) {
    if(array[caracter].length > 5) {
        nuevoArray.push(array[caracter]);
    }
}

console.log(nuevoArray)