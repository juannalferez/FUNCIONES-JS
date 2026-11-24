// Ejercicio 10. Ordenar productos por precio | sort()
const productos = [
  { nombre: "Laptop", precio: 2500000 },
  { nombre: "Mouse", precio: 50000 },
  { nombre: "Monitor", precio: 900000 },
  { nombre: "Teclado", precio: 120000 },
];

const ordenarProductosPorPrecio = (productos) =>
  [...productos].sort((a, b) => a.precio - b.precio);

console.log("Ordenados (menor a mayor):", ordenarProductosPorPrecio(productos));
console.log("Original (sin cambios):", productos);
