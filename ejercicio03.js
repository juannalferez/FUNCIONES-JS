/*
  EJERCICIO 03 - Clasificación de calificaciones
  Enunciado: expresión de función evaluarNota(nota) que retorne "Aprobado"
  (>= 70), "Reprobado" (< 70) o "Nota inválida" si no está entre 0 y 100.
*/

const evaluarNota = function (nota) {
  if (nota < 0 || nota > 100) {
    return "Nota inválida";
  }
  if (nota >= 70) {
    return "Aprobado";
  }
  return "Reprobado";
};

// Pruebas (cinco calificaciones)
const notas = [85, 45, 110, 70, 69];
for (const nota of notas) {
  console.log(`Nota: ${nota} - Estado: ${evaluarNota(nota)}`);
}
