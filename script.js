// 2. Escribe una función que tome un número como argumento y devuelva "Es par" si el número es par, y "Es impar" si el número es impar.


let par_impar = (numero) => {
    if(numero % 2 === 0){
        return console.log("El número es par");
    } else {
        return console.log("El número es impar");
    }
}
par_impar(10);