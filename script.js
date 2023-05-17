// Dado un arreglo de números, utiliza el método reduce para calcular el producto de todos los elementos del arreglo.

const array = [12, 4, 18, 7, 1, 14, 5, 20, 9, 3]

const newArray = array.reduce(
  (acumulador, elemento) => acumulador * elemento);

console.log (newArray)