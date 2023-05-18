//Crea una función anónima que tome un arreglo de números como argumento y devuelva un nuevo arreglo con solo los números pares.

const numerosPares = function(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
  };
  
  const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const resultado = numerosPares(arreglo);
  console.log(resultado); // Devuelve [2, 4, 6, 8, 10]
  