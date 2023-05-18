//Crea una función llamada calcularFactorial que tome un número como argumento y devuelva el factorial de ese número.

function calcularFactorial(numero) {
    let factorial = 1;
  
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  
  const numero = 5;
  const factorial = calcularFactorial(numero);
  console.log(factorial);
  