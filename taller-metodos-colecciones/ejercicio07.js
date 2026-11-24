// Ejercicio 7. Verificar si todos aprobaron | every()
const estudiantes = [
  { nombre: "Ana", nota: 85 },
  { nombre: "Luis", nota: 70 },
  { nombre: "Pedro", nota: 55 },
  { nombre: "Sofía", nota: 95 },
];

const todosAprobaron = (estudiantes) =>
  estudiantes.every((estudiante) => estudiante.nota >= 60);

console.log("¿Todos aprobaron? (inicial):", todosAprobaron(estudiantes)); // false

// Se modifica la nota de Pedro a 65 y se comprueba de nuevo
const pedro = estudiantes.find((e) => e.nombre === "Pedro");
pedro.nota = 65;
console.log("¿Todos aprobaron? (Pedro = 65):", todosAprobaron(estudiantes)); // true
