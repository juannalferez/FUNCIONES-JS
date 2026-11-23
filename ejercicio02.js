/*
  EJERCICIO 02 - Calculadora de descuentos
  Enunciado: función declarativa calcularDescuento(precio, porcentajeDescuento)
  que retorne el precio final. Reto: validar porcentaje entre 0 y 100.
*/

function calcularDescuento(precio, porcentajeDescuento) {
  if (porcentajeDescuento < 0 || porcentajeDescuento > 100) {
    return null; // porcentaje inválido
  }
  const valorDescuento = precio * (porcentajeDescuento / 100);
  return precio - valorDescuento;
}

// Pruebas
const resultado1 = calcularDescuento(100000, 10);
console.log(`$100.000 con 10% -> $${resultado1}`); // 90000

const resultado2 = calcularDescuento(250000, 20);
console.log(`$250.000 con 20% -> $${resultado2}`); // 200000

const resultado3 = calcularDescuento(80000, 5);
console.log(`$80.000 con 5% -> $${resultado3}`); // 76000

// Prueba de validación (reto)
const resultado4 = calcularDescuento(100000, 150);
console.log(
  resultado4 === null ? "Porcentaje inválido (debe estar entre 0 y 100)" : resultado4
);
