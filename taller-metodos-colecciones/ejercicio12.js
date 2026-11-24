// Ejercicio 12. Informe de ventas | filter() + reduce()
const ventas = [
  { vendedor: "Ana", valor: 500000 },
  { vendedor: "Luis", valor: 1200000 },
  { vendedor: "Ana", valor: 800000 },
  { vendedor: "Pedro", valor: 350000 },
  { vendedor: "Luis", valor: 900000 },
];

const calcularVentasVendedor = (ventas, nombre) =>
  ventas
    .filter((venta) => venta.vendedor === nombre)
    .reduce((total, venta) => total + venta.valor, 0);

console.log(calcularVentasVendedor(ventas, "Ana")); // 1300000
console.log(calcularVentasVendedor(ventas, "Luis")); // 2100000
console.log(calcularVentasVendedor(ventas, "Pedro")); // 350000
