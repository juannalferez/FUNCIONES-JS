/*
  EJERCICIO 11 - Catálogo de productos
  Enunciado: mostrarProductos, calcularValorInventario y buscarProducto
  usando ciclos (sin find(), map() ni reduce()).
*/

const productos = [
  { nombre: "Laptop", precio: 2500000, stock: 5 },
  { nombre: "Mouse", precio: 45000, stock: 20 },
  { nombre: "Teclado", precio: 120000, stock: 10 },
  { nombre: "Monitor", precio: 850000, stock: 3 },
];

function mostrarProductos(lista) {
  for (const producto of lista) {
    console.log(
      `Producto: ${producto.nombre} | Precio: $${producto.precio} | Stock: ${producto.stock}`
    );
  }
}

function calcularValorInventario(lista) {
  let total = 0;
  for (const producto of lista) {
    const subtotal = producto.precio * producto.stock;
    total += subtotal;
  }
  return total;
}

function buscarProducto(lista, nombreBuscado) {
  for (const producto of lista) {
    if (producto.nombre === nombreBuscado) {
      return producto;
    }
  }
  return null;
}

// Pruebas
mostrarProductos(productos);

console.log(`Valor total del inventario: $${calcularValorInventario(productos)}`);
// 12500000 + 900000 + 1200000 + 2550000 = 17150000

console.log(buscarProducto(productos, "Mouse"));    // objeto Mouse
console.log(buscarProducto(productos, "Monitor"));  // objeto Monitor
console.log(buscarProducto(productos, "Tablet"));   // null
