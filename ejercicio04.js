/*
  EJERCICIO 04 - Conversor de temperaturas
  Enunciado: dos arrow functions celsiusAFahrenheit y fahrenheitACelsius.
  F = (C × 9 / 5) + 32 ; C = (F - 32) × 5 / 9
*/

const celsiusAFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const fahrenheitACelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

// Pruebas
console.log(`0 °C = ${celsiusAFahrenheit(0)} °F`);     // 32
console.log(`25 °C = ${celsiusAFahrenheit(25)} °F`);   // 77
console.log(`100 °C = ${celsiusAFahrenheit(100)} °F`); // 212
console.log(`32 °F = ${fahrenheitACelsius(32)} °C`);   // 0
console.log(`212 °F = ${fahrenheitACelsius(212)} °C`); // 100
