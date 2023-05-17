// Escribe una función que tome un número como argumento y devuelva "Positivo" si el número es mayor que 0, 
// "Negativo" si el número es menor que 0, y "Cero" si el número es igual a 0.

const result = (numero) => {
    if(numero > 0) {
      return "Positivo"
    }
    else if (numero < 0){
      return "Negativo"
    } else {
      return 0
    }
  }
  console.log(result(1))
  console.log(result(-1))
  console.log(result(0))