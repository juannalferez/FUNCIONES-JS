// Ejercicio 4. Filtrar productos económicos | filter()
const productos = [
  { nombre: "Mouse", precio: 45000 },
  { nombre: "Teclado", precio: 85000 },
  { nombre: "Monitor", precio: 750000 },
  { nombre: "Audífonos", precio: 95000 },
  { nombre: "Laptop", precio: 2500000 },
];

const obtenerProductosEconomicos = (productos) =>
  productos.filter((producto) => producto.precio < 100000);

const economicos = obtenerProductosEconomicos(productos);
console.log("Productos económicos (menos de $100.000):");
economicos.forEach(({ nombre, precio }) =>
  console.log(`- ${nombre}: $${precio.toLocaleString("es-CO")}`)
);
