//Dado un arreglo de números, utiliza el método reduce para calcular la suma de todos los elementos del arreglo.

let array = [1,2,3,4,5];

let arraySuma = array.reduce(
    (acumulador, elemeto) => {
        return acumulador + elemeto
    }
);

console.log(arraySuma);