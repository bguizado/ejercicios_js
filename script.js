//Convierte la función esPalindromo en una función flecha.

const esPalindromo = cadena => {
    const cadenaSinEspacios = cadena.replace(/\s/g, '').toLowerCase();
    const cadenaInvertida = cadenaSinEspacios.split('').reverse().join('');
    return cadenaSinEspacios === cadenaInvertida;
  };
  
  console.log(esPalindromo('anita lava la tina'));
  console.log(esPalindromo('Hola mundo'));