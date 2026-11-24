// Ejercicio 6. Verificar productos agotados | some()
const inventario = [
  { nombre: "Laptop", stock: 5 },
  { nombre: "Mouse", stock: 0 },
  { nombre: "Teclado", stock: 8 },
  { nombre: "Monitor", stock: 3 },
];

const hayProductosAgotados = (inventario) =>
  inventario.some((producto) => producto.stock === 0);

console.log("¿Hay productos agotados?", hayProductosAgotados(inventario));
// Esperado: true
