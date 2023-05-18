//Crea una función anónima que tome un arreglo de números como argumento y devuelva un nuevo arreglo con solo los números mayores a 10.


const arregloMayoresA10 = function (arreglo) {
    return arreglo.filter(numero => numero > 10);
  };
  
  const numeros = [5, 12, 8, 20, 3, 15];
  const mayoresA10 = arregloMayoresA10(numeros);
  console.log(mayoresA10);
  