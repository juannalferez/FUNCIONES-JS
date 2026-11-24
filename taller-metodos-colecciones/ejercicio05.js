// Ejercicio 5. Buscar un aprendiz por documento | find()
const aprendices = [
  { documento: 101, nombre: "Carlos", programa: "ADSO" },
  { documento: 102, nombre: "María", programa: "Redes" },
  { documento: 103, nombre: "Andrés", programa: "ADSO" },
  { documento: 104, nombre: "Laura", programa: "Multimedia" },
];

const buscarAprendiz = (aprendices, documento) =>
  aprendices.find((aprendiz) => aprendiz.documento === documento) ??
  "Aprendiz no encontrado";

console.log(buscarAprendiz(aprendices, 103)); // { documento: 103, nombre: 'Andrés', ... }
console.log(buscarAprendiz(aprendices, 999)); // "Aprendiz no encontrado"
