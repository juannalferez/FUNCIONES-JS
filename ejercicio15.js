/*
  EJERCICIO 15 - Sistema de gestión de tareas (integrador)
  Enunciado: mostrarTareas, contarPendientes, contarCompletadas,
  agregarTarea y completarTarea (sin modificar el original, usando spread),
  y mostrarResponsable con destructuring.
*/

const tareas = [
  { id: 1, titulo: "Estudiar funciones", responsable: "Ana", completada: false },
  { id: 2, titulo: "Practicar arreglos", responsable: "Carlos", completada: true },
  { id: 3, titulo: "Aprender objetos", responsable: "María", completada: false },
];

function mostrarTareas(lista) {
  for (const tarea of lista) {
    const estado = tarea.completada ? "Completada" : "Pendiente";
    console.log(`${tarea.id}. ${tarea.titulo} - ${estado}`);
  }
}

function contarPendientes(lista) {
  let contador = 0;
  for (const tarea of lista) {
    if (!tarea.completada) {
      contador++;
    }
  }
  return contador;
}

function contarCompletadas(lista) {
  let contador = 0;
  for (const tarea of lista) {
    if (tarea.completada) {
      contador++;
    }
  }
  return contador;
}

// Retorna un NUEVO arreglo con la tarea agregada
function agregarTarea(lista, nuevaTarea) {
  return [...lista, nuevaTarea];
}

// Retorna un NUEVO arreglo, copiando el objeto modificado con spread
function completarTarea(lista, id) {
  const nuevaLista = [];
  for (const tarea of lista) {
    if (tarea.id === id) {
      nuevaLista.push({ ...tarea, completada: true });
    } else {
      nuevaLista.push(tarea);
    }
  }
  return nuevaLista;
}

function mostrarResponsable(tarea) {
  const { titulo, responsable } = tarea;
  console.log(`La tarea "${titulo}" es responsabilidad de ${responsable}.`);
}

// ===== Pruebas =====
console.log("===== SISTEMA DE TAREAS =====");
mostrarTareas(tareas);
console.log(`Total de tareas: ${tareas.length}`);
console.log(`Tareas completadas: ${contarCompletadas(tareas)}`);
console.log(`Tareas pendientes: ${contarPendientes(tareas)}`);

console.log("\nAgregando nueva tarea...");
const tareasConNueva = agregarTarea(tareas, {
  id: 4,
  titulo: "Practicar destructuring",
  responsable: "Luis",
  completada: false,
});
mostrarTareas([tareasConNueva[3]]);

console.log("\nCompletando tarea 1...");
const tareasActualizadas = completarTarea(tareasConNueva, 1);
mostrarTareas([tareasActualizadas[0]]);

console.log("\n--- Estado final de la nueva lista ---");
mostrarTareas(tareasActualizadas);

console.log("\n--- Responsables ---");
mostrarResponsable(tareas[0]);
mostrarResponsable(tareas[2]);
mostrarResponsable(tareasConNueva[3]);

console.log("\n--- Verificación: el arreglo original NO cambió ---");
console.log(`Original tiene ${tareas.length} tareas`);              // 3
console.log(`Tarea 1 original completada: ${tareas[0].completada}`); // false
mostrarTareas(tareas);
