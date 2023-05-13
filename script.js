//Dado un arreglo de números, utiliza el método map para crear un nuevo arreglo que contenga el cuadrado de cada número(sin usar Math.pow()).

let array = [1,2,3,4,5];

let arrayAlCuadrado = array.map( elemento => {
    return elemento**2;
});

console.log(arrayAlCuadrado);