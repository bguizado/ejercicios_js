// Dado un arreglo de nombres, utiliza el método map para crear un nuevo arreglo que contenga solo los nombres que comienzan con la letra "A". 
// Luego, utiliza el método reduce para concatenar todos los nombres en una sola cadena separada por comas.

let array = ["Ana", "Pedro", "Luis", "Andrea", "María", "Antonio", "Sofía", "Alejandro", "Carolina", "Adrián"];

let nombresConA = array.map(nombre => {
    if (nombre.startsWith("A")) {
      return nombre;
    }
  }).filter(nombre => nombre !== undefined).reduce((acumulador, nombre, index) => {return acumulador+","+nombre} );

console.log(nombresConA);