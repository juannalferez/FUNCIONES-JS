// Ejercicio 14. Sistema de análisis de estudiantes | filter() + map() + sort()
const estudiantes = [
  { nombre: "Carlos", nota: 85 },
  { nombre: "María", nota: 95 },
  { nombre: "Pedro", nota: 55 },
  { nombre: "Laura", nota: 75 },
  { nombre: "Andrés", nota: 45 },
];

const generarRanking = (estudiantes) =>
  estudiantes
    .filter(({ nota }) => nota >= 60)
    .map(({ nombre, nota }) => ({ nombre, nota }))
    .sort((a, b) => b.nota - a.nota);

console.log(generarRanking(estudiantes));
// Esperado: María 95, Carlos 85, Laura 75
