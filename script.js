// Dado un arreglo de objetos que representan productos, utiliza el método filter para crear un nuevo arreglo
// que contenga solo los productos que están en stock (es decir, aquellos cuya propiedad stock sea verdadera).
// Luego, utiliza el método reduce para calcular el precio total de todos los productos en stock.

let arrayProduct = [
    { sku: "Mayonesa 10gr", Precio: 1.99, stock: 10 },
    { sku: "Ketchup 10gr", precio: 0.99, stock: 7 },
    { sku: "Mostaza 10gr", precio: 0.49, stock: 13 },
    { sku: "Aji 10gr", precio: 0.79, stock: 0 },
    { sku: "Relish 10gr", precio: 3.29, stock: 1 },
    { sku: "Golf 10gr", precio: 1.49, stock: 0 },
    { sku: "Tartara 10gr", precio: 2.69, stock: 8 }
  ];

  let arrayProductConStock = arrayProduct.filter( stock => {
    return stock > 0
  })

  console.log(arrayProductConStock)