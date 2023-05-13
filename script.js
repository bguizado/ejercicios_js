//Dado un arreglo de números, utiliza el método filter para crear un nuevo arreglo que contenga solo los números pares.

let array = [1,2,3,4,5,6,7,8,9,10];

let arrayFiltroPares = array.filter (
    elemento => {
        return elemento % 2 === 0
    }
);

console.log(arrayFiltroPares)