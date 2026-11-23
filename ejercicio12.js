/*
  EJERCICIO 12 - Sistema de calificaciones
  Enunciado: calcularPromedio, obtenerAprobados (>= 70) y
  obtenerMejorAprendiz. Reto: reporte de aprobados y reprobados.
*/

const aprendices = [
  { nombre: "Laura", nota: 85 },
  { nombre: "Andrés", nota: 62 },
  { nombre: "Camila", nota: 95 },
  { nombre: "Sergio", nota: 48 },
  { nombre: "Valentina", nota: 78 },
];

function calcularPromedio(lista) {
  if (lista.length === 0) {
    return 0;
  }
  let suma = 0;
  for (const aprendiz of lista) {
    suma += aprendiz.nota;
  }
  return suma / lista.length;
}

function obtenerAprobados(lista) {
  const aprobados = [];
  for (const aprendiz of lista) {
    if (aprendiz.nota >= 70) {
      aprobados.push(aprendiz);
    }
  }
  return aprobados;
}

function obtenerMejorAprendiz(lista) {
  let mejor = lista[0];
  for (const aprendiz of lista) {
    if (aprendiz.nota > mejor.nota) {
      mejor = aprendiz;
    }
  }
  return mejor;
}

// Reto: reporte
function generarReporte(lista) {
  const aprobados = obtenerAprobados(lista).length;
  const reprobados = lista.length - aprobados;
  console.log(`Aprobados: ${aprobados}`);
  console.log(`Reprobados: ${reprobados}`);
}

// Pruebas
console.log(`Promedio general: ${calcularPromedio(aprendices)}`); // 73.6
console.log("Aprobados:", obtenerAprobados(aprendices));
console.log("Mejor aprendiz:", obtenerMejorAprendiz(aprendices)); // Camila
console.log("--- Reporte ---");
generarReporte(aprendices);

// Prueba con otra lista
const otraLista = [
  { nombre: "Pablo", nota: 100 },
  { nombre: "Elena", nota: 30 },
];
console.log(calcularPromedio(otraLista));          // 65
console.log(obtenerAprobados(otraLista));          // Pablo
console.log(obtenerMejorAprendiz(otraLista));      // Pablo
generarReporte(otraLista);
