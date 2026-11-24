// Ejercicio 3. Filtrar estudiantes aprobados | filter()
const notas = [45, 80, 55, 90, 65, 30, 100];
const NOTA_MINIMA = 60;

const obtenerNotasAprobadas = (notas) =>
  notas.filter((nota) => nota >= NOTA_MINIMA);

console.log("Notas:", notas);
console.log("Aprobadas:", obtenerNotasAprobadas(notas));
// Esperado: [80, 90, 65, 100]
