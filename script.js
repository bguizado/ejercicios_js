//Crea una función llamada duplicarElementos que tome un arreglo como argumento y devuelva un nuevo arreglo con los elementos duplicados.

function duplicarElementos(arreglo) {
    return arreglo.map(elemento => elemento * 2);
  }
  
const numeros = [1, 2, 3, 4, 5];
const duplicados = duplicarElementos(numeros);
console.log(duplicados);