/*
  EJERCICIO 10 - Registro de aprendices
  Enunciado: objeto aprendiz, función mostrarInformacion(aprendiz),
  función estaAprobado(aprendiz) (nota mínima 70) y mensaje según resultado.
  Reto: segundo objeto reutilizando las funciones.
*/

const aprendiz = {
  nombre: "Daniel",
  edad: 22,
  programa: "ADSO",
  matriculado: true,
  notaFinal: 87,
};

// 1. Propiedades individuales
console.log(aprendiz.nombre);
console.log(aprendiz.edad);
console.log(aprendiz.programa);
console.log(aprendiz.matriculado);
console.log(aprendiz.notaFinal);

// 2-4. Mostrar información
function mostrarInformacion(aprendiz) {
  console.log(`Nombre: ${aprendiz.nombre}`);
  console.log(`Programa: ${aprendiz.programa}`);
  console.log(`Edad: ${aprendiz.edad}`);
  console.log(`Nota final: ${aprendiz.notaFinal}`);
}

// 5. Aprobado o no
function estaAprobado(aprendiz) {
  return aprendiz.notaFinal >= 70;
}

// 6. Mensaje según resultado
function mostrarResultado(aprendiz) {
  if (estaAprobado(aprendiz)) {
    console.log(`${aprendiz.nombre} aprobó con ${aprendiz.notaFinal}.`);
  } else {
    console.log(`${aprendiz.nombre} no aprobó (nota: ${aprendiz.notaFinal}).`);
  }
}

console.log("--- Aprendiz 1 ---");
mostrarInformacion(aprendiz);
mostrarResultado(aprendiz);

// Reto: segundo aprendiz
const aprendiz2 = {
  nombre: "Valeria",
  edad: 19,
  programa: "Contabilidad",
  matriculado: true,
  notaFinal: 55,
};

console.log("--- Aprendiz 2 ---");
mostrarInformacion(aprendiz2);
mostrarResultado(aprendiz2);

// Prueba adicional
const aprendiz3 = { nombre: "Mateo", edad: 25, programa: "Redes", matriculado: false, notaFinal: 70 };
console.log("--- Aprendiz 3 ---");
mostrarInformacion(aprendiz3);
mostrarResultado(aprendiz3);
