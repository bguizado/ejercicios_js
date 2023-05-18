// Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números positivos. 
// Luego, utiliza el método reduce para calcular la suma de los números seleccionados.

const numeros = [-3, 5, -2, 10, -8, 4, 7, -1];

const numerosPositivos = numeros.filter(numero => numero > 0);

const sumaNumerosPositivos = numerosPositivos.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(numerosPositivos);
console.log(sumaNumerosPositivos);
