//Crea una función llamada invertirCadena que tome una cadena como argumento y devuelva la cadena invertida.

function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
  }
  
  const palabra = 'Hola, mundo!';
  const invertida = invertirCadena(palabra);
  console.log(invertida);