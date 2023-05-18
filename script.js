// Convierte la función saludar en una función flecha.

const saludar = nombre => `¡Hola, ${nombre}!`;

const nombre = "Juan";
const mensajeSaludo = saludar(nombre);
console.log(mensajeSaludo);