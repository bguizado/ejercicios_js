// Dado un arreglo de palabras, utiliza el método reduce para concatenar todas las palabras en una sola cadena.

const palabras = ["Hola", "mundo", "desde", "JavaScript"];

const cadenaConcatenada = palabras.reduce((acumulador, palabra) => {
  return acumulador + palabra;
}, "");

console.log(cadenaConcatenada);
