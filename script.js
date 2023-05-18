// Crea una función llamada esPar que tome un número como argumento y devuelva true si el número es par, y false si no lo es.

function esPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(esPar(4));  // Devuelve true
  console.log(esPar(7));  // Devuelve false
  