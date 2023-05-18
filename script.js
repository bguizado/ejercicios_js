//Convierte la función calcularFactorial en una función flecha.

const calcularFactorial = (numero) => {
    let factorial = 1;
  
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
  
    return factorial;
  };
  
  const numero = 5;
  const factorial = calcularFactorial(numero);
  console.log(factorial);