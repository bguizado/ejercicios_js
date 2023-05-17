// Dado un arreglo de palabras, utiliza el método map para crear un nuevo arreglo que contenga la longitud de cada palabra.

const array = ["Ana", "Pedro", "Luis", "Andrea", "María", "Antonio", "Sofía", "Alejandro", "Carolina", "Adrián"]

const newArray = array.map((elemento) => {
 let longitud = elemento.length
 return elemento + " " + "tiene" + " " + longitud + " " + "letras"
})

console.log (newArray)