// Dado un arreglo de números, utiliza el método reduce para calcular el producto de los números pares.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let productoPares = array.reduce( (acumulador, valor) => {
  if(valor % 2 ===0){
    return acumulador*valor;
  } else {
    return acumulador;
  }
},1);

console.log(productoPares);