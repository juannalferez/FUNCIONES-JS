/*
  EJERCICIO 05 - Calculadora de salario
  Enunciado: constante global PORCENTAJE_DEDUCCION = 0.08 y función
  calcularSalarioNeto(salarioBruto). Reto: segunda función que reciba el
  porcentaje como parámetro.
*/

const PORCENTAJE_DEDUCCION = 0.08;

function calcularSalarioNeto(salarioBruto) {
  const deduccion = salarioBruto * PORCENTAJE_DEDUCCION;
  return salarioBruto - deduccion;
}

// Reto: el porcentaje llega como parámetro
function calcularSalarioNetoConPorcentaje(salarioBruto, porcentaje) {
  const deduccion = salarioBruto * porcentaje;
  return salarioBruto - deduccion;
}

// Pruebas
const salarios = [1500000, 2800000, 4000000];
for (const bruto of salarios) {
  const deduccion = bruto * PORCENTAJE_DEDUCCION;
  const neto = calcularSalarioNeto(bruto);
  console.log(`Bruto: $${bruto} | Deducción: $${deduccion} | Neto: $${neto}`);
}

// Pruebas del reto
console.log("--- Reto: porcentaje como parámetro ---");
console.log(calcularSalarioNetoConPorcentaje(2000000, 0.05)); // 1900000
console.log(calcularSalarioNetoConPorcentaje(2000000, 0.1));  // 1800000
console.log(calcularSalarioNetoConPorcentaje(2000000, 0.12)); // 1760000
