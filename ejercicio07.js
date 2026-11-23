/*
  EJERCICIO 07 - Suma de precios de productos
  Enunciado: calcularTotal(precios) y calcularPromedio(precios) usando
  for...of y acumuladores (sin reduce()).
*/

const precios = [15000, 25000, 30000, 12000, 18000];

function calcularTotal(lista) {
  let total = 0;
  for (const precio of lista) {
    total += precio;
  }
  return total;
}

function calcularPromedio(lista) {
  if (lista.length === 0) {
    return 0;
  }
  return calcularTotal(lista) / lista.length;
}

// Pruebas
console.log(`Total de productos: $${calcularTotal(precios)}`);   // 100000
console.log(`Precio promedio: $${calcularPromedio(precios)}`);   // 20000

const otros = [10000, 20000, 30000];
console.log(`Total: $${calcularTotal(otros)} | Promedio: $${calcularPromedio(otros)}`); // 60000 | 20000

console.log(`Total (lista vacía): $${calcularTotal([])}`);       // 0
