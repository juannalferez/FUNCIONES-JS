// Ejercicio 11. Procesamiento de salarios | filter() + map()
const empleados = [
  { nombre: "Ana", salario: 1800000 },
  { nombre: "Carlos", salario: 3200000 },
  { nombre: "Laura", salario: 2500000 },
  { nombre: "Pedro", salario: 4000000 },
];

const aumentarSalarios = (empleados) =>
  empleados
    .filter(({ salario }) => salario < 3000000)
    .map(({ nombre, salario }) => ({
      nombre,
      salarioOriginal: salario,
      salarioNuevo: Math.round(salario * 1.08),
    }));

console.log(aumentarSalarios(empleados));
console.log("Datos originales (sin cambios):", empleados);
