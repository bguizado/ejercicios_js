//Crea una función anónima que tome un arreglo de palabras como argumento y devuelva un nuevo arreglo con solo las palabras que sean palíndromos.

const obtenerPalindromos = function(arregloPalabras) {
    return arregloPalabras.filter(palabra => {
      const palabraSinEspacios = palabra.replace(/\s/g, '').toLowerCase();
      const palabraInvertida = palabraSinEspacios.split('').reverse().join('');
      return palabraSinEspacios === palabraInvertida;
    });
  };
  
  const palabras = ['reconocer', 'oso', 'casa', 'ana', 'oso'];
  
  console.log(obtenerPalindromos(palabras));
  