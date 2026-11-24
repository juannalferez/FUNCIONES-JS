// Ejercicio 8. Calcular el total de una factura | reduce()
const carrito = [
  { producto: "Mouse", precio: 50000, cantidad: 2 },
  { producto: "Teclado", precio: 120000, cantidad: 1 },
  { producto: "Monitor", precio: 800000, cantidad: 1 },
];

const calcularTotalFactura = (carrito) =>
  carrito.reduce((total, { precio, cantidad }) => total + precio * cantidad, 0);

const total = calcularTotalFactura(carrito);
console.log("Total factura:", total);
console.log(`Total factura: $${total.toLocaleString("es-CO")}`);
// Esperado: $1.020.000
