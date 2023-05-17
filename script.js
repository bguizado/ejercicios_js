// Escribe una función que tome una cadena como argumento y devuelva "Es una frase" si la cadena contiene espacios en blanco, y
//  "Es una palabra" si la cadena no contiene espacios en blanco.

const cadena = texto => {
    if(texto.includes(" ")){
      return "Es una frase"
    } else {
      return "Es una palabra"
    }
   }
   
   console.log(cadena("hola hormiga"))
   console.log(cadena("hola"))