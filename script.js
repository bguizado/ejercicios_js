// Crea una función llamada calcularPromedio que tome un arreglo de números como argumento y devuelva el promedio de esos números.

function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma / numeros.length;
  }
  
  const numeros = [5, 8, 12, 4, 9];
  const promedio = calcularPromedio(numeros);
  console.log(promedio);