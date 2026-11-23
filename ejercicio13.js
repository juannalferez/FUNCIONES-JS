/*
  EJERCICIO 13 - Desestructuración de objetos
  Enunciado: extraer nombre, cargo y salario con destructuring, usar template
  strings, función mostrarEmpleado(empleado) y reutilizarla con un segundo
  empleado. Reto: destructuring en los parámetros.
*/

const empleado = {
  nombre: "Carlos Pérez",
  cargo: "Desarrollador",
  salario: 3500000,
  ciudad: "Bogotá",
  activo: true,
};

// 1-2. Destructuring y template strings
const { nombre, cargo, salario } = empleado;
console.log(`${nombre} trabaja como ${cargo} y gana $${salario}.`);

// 3-5. Función con destructuring dentro
function mostrarEmpleado(empleado) {
  const { nombre, cargo, salario } = empleado;
  return `Empleado: ${nombre} | Cargo: ${cargo} | Salario: $${salario}`;
}

console.log(mostrarEmpleado(empleado));

// 6. Segundo empleado
const empleado2 = {
  nombre: "Marcela Gómez",
  cargo: "Diseñadora",
  salario: 3000000,
  ciudad: "Medellín",
  activo: true,
};
console.log(mostrarEmpleado(empleado2));

// Reto: destructuring directamente en los parámetros
function mostrarEmpleadoReto({ nombre, cargo, salario }) {
  return `Empleado: ${nombre} | Cargo: ${cargo} | Salario: $${salario}`;
}

console.log("--- Reto ---");
console.log(mostrarEmpleadoReto(empleado));
console.log(mostrarEmpleadoReto(empleado2));
console.log(
  mostrarEmpleadoReto({ nombre: "Julián Ruiz", cargo: "Analista", salario: 2800000 })
);
