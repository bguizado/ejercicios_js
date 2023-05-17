// Escribe un bucle que imprima los números pares del 1 al 20 en la consola.

let array = []

  for (numero = 0; numero < 20; numero++) {
  if  (numero % 2 === 0){
      array.push(numero)
    }
 
}
console.log (array)