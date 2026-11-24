// Ejercicio 2. Convertir temperaturas | map()
const temperaturas = [0, 15, 25, 30, 40];

const convertirAFahrenheit = (temperaturas) =>
  temperaturas.map((c) => (c * 9) / 5 + 32);

console.log("Celsius:", temperaturas);
console.log("Fahrenheit:", convertirAFahrenheit(temperaturas));
// Esperado: [32, 59, 77, 86, 104]
