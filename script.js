// Dado un arreglo de nombres, utiliza el método map para crear un nuevo arreglo que contenga solo los nombres en mayúsculas.

const array = ["JUAN", "maría", "CARLOS", "LUISA", "pedro", "ANA", "JAVIER", "sofía", "DANIEL", "LUCÍA"]

let newArray = array.map(elemento => {
  if (elemento === elemento.toUpperCase()){
    return elemento
  }
}).filter(elemento => elemento !== undefined)

console.log(newArray)