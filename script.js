//Crea una función anónima que tome un arreglo de números como argumento y devuelva la suma de todos los elementos del arreglo.

const sumarArreglo = function (arreglo) {
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
    return suma;
  };
  
  const numeros = [1, 2, 3, 4, 5];
  const resultado = sumarArreglo(numeros);
  console.log(resultado);
  