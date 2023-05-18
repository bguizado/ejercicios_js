//Crea una función llamada esPalindromo que tome una cadena como argumento y 
// devuelva true si la cadena es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda), y false si no lo es.

function esPalindromo(cadena) {
    const cadenaSinEspacios = cadena.replace(/\s/g, '').toLowerCase();
    const cadenaInvertida = cadenaSinEspacios.split('').reverse().join('');
    return cadenaSinEspacios === cadenaInvertida;
  }
  
  console.log(esPalindromo('anita lava la tina'));
  console.log(esPalindromo('Hola mundo'));
  