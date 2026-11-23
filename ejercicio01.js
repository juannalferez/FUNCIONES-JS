/*
  EJERCICIO 01 - Presentación de aprendices
  Enunciado: función presentarAprendiz(nombre, edad, programa) que use
  template strings y retorne el mensaje. Invocarla con tres aprendices.
*/

function presentarAprendiz(nombre, edad, programa) {
  return `Hola, soy ${nombre}, tengo ${edad} años y estudio ${programa}.`;
}

// Pruebas
console.log(presentarAprendiz("Laura", 20, "Análisis y Desarrollo de Software"));
console.log(presentarAprendiz("Carlos", 22, "Gestión Empresarial"));
console.log(presentarAprendiz("Sofía", 19, "Diseño Gráfico"));
