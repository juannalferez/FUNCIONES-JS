/*
  EJERCICIO 06 - Gestión de lista de aprendices
  Enunciado: recorrer con for y for...of, agregar con push(), eliminar con
  pop(), función mostrarAprendices(lista) y total de aprendices.
  Reto: mostrar con posición desde 1.
*/

const aprendices = ["Ana", "Carlos", "María", "Pedro"];

// 1. Recorrido con for
console.log("--- Con for ---");
for (let i = 0; i < aprendices.length; i++) {
  console.log(aprendices[i]);
}

// 2. Recorrido con for...of
console.log("--- Con for...of ---");
for (const aprendiz of aprendices) {
  console.log(aprendiz);
}

// 3. Agregar dos aprendices
aprendices.push("Luisa");
aprendices.push("Jorge");

// 4. Eliminar el último
const eliminado = aprendices.pop();
console.log(`Eliminado: ${eliminado}`);

// 5. Función que recibe el arreglo
function mostrarAprendices(lista) {
  for (const aprendiz of lista) {
    console.log(aprendiz);
  }
}

console.log("--- mostrarAprendices ---");
mostrarAprendices(aprendices);

// 6. Total
console.log(`Total de aprendices: ${aprendices.length}`);

// Reto: con posición desde 1
function mostrarConPosicion(lista) {
  for (let i = 0; i < lista.length; i++) {
    console.log(`${i + 1}. ${lista[i]}`);
  }
}

console.log("--- Reto: con posición ---");
mostrarConPosicion(aprendices);

// Pruebas adicionales con otras listas
console.log("--- Pruebas adicionales ---");
mostrarAprendices(["Sofía", "Mateo"]);
mostrarAprendices([]);
mostrarConPosicion(["Uno", "Dos", "Tres"]);
