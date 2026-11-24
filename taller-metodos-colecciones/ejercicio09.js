// Ejercicio 9. Ordenar calificaciones | sort()
const calificaciones = [85, 60, 95, 70, 100, 45, 80];

// Se copia el arreglo con [...] para no modificar el original
const ordenarAscendente = (calificaciones) =>
  [...calificaciones].sort((a, b) => a - b);

const ordenarDescendente = (calificaciones) =>
  [...calificaciones].sort((a, b) => b - a);

console.log("Original:", calificaciones);
console.log("Ascendente:", ordenarAscendente(calificaciones));
console.log("Descendente:", ordenarDescendente(calificaciones));
console.log("Original (sin cambios):", calificaciones);
