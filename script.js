// Crea una función anónima que tome un arreglo de palabras como argumento y devuelva un nuevo arreglo con la longitud de cada palabra.

const palabras = ["Hola", "mundo", "javascript", "programación", "desarrollo"];

const longitudPalabras = palabras.map(function(palabra) {
  return palabra.length;
});

console.log(longitudPalabras);
