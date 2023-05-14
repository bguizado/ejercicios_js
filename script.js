// Dado un arreglo de objetos que representan productos, utiliza el método filter para crear un nuevo arreglo
// que contenga solo los productos que están en stock (es decir, aquellos cuya propiedad stock sea verdadera).
// Luego, utiliza el método reduce para calcular el precio total de todos los productos en stock.

let arrayProduct = [
    { sku: "Mayonesa 10gr", precio: 1.99, stock: true },
    { sku: "Ketchup 10gr", precio: 0.99, stock: true },
    { sku: "Mostaza 10gr", precio: 0.49, stock: true },
    { sku: "Aji 10gr", precio: 0.79, stock: false },
    { sku: "Relish 10gr", precio: 3.29, stock: true },
    { sku: "Golf 10gr", precio: 1.49, stock: false },
    { sku: "Tartara 10gr", precio: 2.69, stock: true }
  ];

let arrayProductConStock = arrayProduct.filter( product => {
    return product.stock === true
    }
  );

let arraySumaProductConStock = arrayProductConStock.reduce((total, product) => {
    return total + product.precio;
}, 0);


console.log(arrayProductConStock);
console.log(arraySumaProductConStock);