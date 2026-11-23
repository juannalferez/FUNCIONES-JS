/*
  EJERCICIO 08 - Clasificación de números
  Enunciado: arrow function esPar(numero); separar en arreglos pares e
  impares con for...of y push().
*/

const numeros = [12, 7, 18, 3, 22, 15, 8, 11];

const esPar = (numero) => numero % 2 === 0;

const pares = [];
const impares = [];

for (const numero of numeros) {
  if (esPar(numero)) {
    pares.push(numero);
  } else {
    impares.push(numero);
  }
}

console.log("Originales:", numeros);
console.log("Pares:", pares);     // [12, 18, 22, 8]
console.log("Impares:", impares); // [7, 3, 15, 11]

// Pruebas adicionales de esPar
console.log(esPar(4));  // true
console.log(esPar(9));  // false
console.log(esPar(0));  // true
