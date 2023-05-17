// Dado un arreglo de palabras, utiliza el método reduce para calcular la cantidad total de caracteres de todas las palabras en el arreglo.

const array = ["Ana", "Pedro", "Luis", "Andrea", "María", "Antonio", "Sofía"]

const cantidadCaracteres = array.reduce((acumulador, elemento) => acumulador + elemento.length, 0);

console.log(cantidadCaracteres);