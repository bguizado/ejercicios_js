// Escribe una función que tome una cadena como argumento y devuelva "Es un palíndromo" si la cadena es igual al revés, y "No es un palíndromo" si no lo es.

const cadena = (texto) => {
    const textoMinuscula = texto.toLocaleLowerCase()
   if(textoMinuscula === textoMinuscula.split("").reverse().join("")){
     return "Es un palíndromo"
   } else {
     return "No es un palíndromo"
   }
  }
  console.log(cadena("Pedro"))
  console.log(cadena("Ana"))
  console.log(cadena("Radar"))