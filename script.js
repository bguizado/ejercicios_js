// Convierte la función calcularPromedio en una función flecha.

const calcularPromedio = numeros => {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma / numeros.length;
  };
  
  const numeros = [5, 8, 12, 4, 9];
  const promedio = calcularPromedio(numeros);
  console.log(promedio);
  