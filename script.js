// Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números impares.

const array = [12, 4, 18, 7, 1, 14, 5, 20, 9, 3]

const newArray = array.filter(elemento => elemento % 2 !== 0)

console.log(newArray)