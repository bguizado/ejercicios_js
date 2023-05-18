// Crea una función llamada saludar que tome un nombre como argumento y devuelva un mensaje de saludo, por ejemplo: "¡Hola, [nombre]!"

function saludar(nombre) {
    return `¡Hola, ${nombre}!`;
  }
  
  const nombre = "Juan";
  const mensajeSaludo = saludar(nombre);
  console.log(mensajeSaludo);