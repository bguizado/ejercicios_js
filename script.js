//Convierte la función duplicarElementos en una función flecha.

const duplicarElementos = arreglo => arreglo.map(elemento => elemento * 2);

const numeros = [1, 2, 3, 4, 5];
const duplicados = duplicarElementos(numeros);
console.log(duplicados);
