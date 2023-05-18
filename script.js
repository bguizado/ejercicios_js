// Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números divisibles por 3.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const divisiblesPor3 = numeros.filter(numero => numero % 3 === 0);

console.log(divisiblesPor3);
