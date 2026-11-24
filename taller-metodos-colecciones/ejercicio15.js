// Ejercicio 15. Sistema de inventario y facturación | Los siete métodos
const productos = [
  { id: 1, nombre: "Laptop", precio: 2500000, stock: 5 },
  { id: 2, nombre: "Mouse", precio: 50000, stock: 0 },
  { id: 3, nombre: "Teclado", precio: 120000, stock: 8 },
  { id: 4, nombre: "Monitor", precio: 900000, stock: 3 },
  { id: 5, nombre: "Audífonos", precio: 150000, stock: 0 },
];

const IVA = 0.19;

// filter(): productos con stock mayor que cero
const obtenerDisponibles = (productos) =>
  productos.filter((producto) => producto.stock > 0);

// map(): precio con IVA del 19 % (devuelve objetos nuevos)
const aplicarIVA = (productos) =>
  productos.map((producto) => ({
    ...producto,
    precioConIVA: producto.precio * (1 + IVA),
  }));

// find(): buscar producto por id
const buscarProducto = (productos, id) =>
  productos.find((producto) => producto.id === id) ?? "Producto no encontrado";

// some(): ¿existe algún producto agotado?
const hayAgotados = (productos) =>
  productos.some((producto) => producto.stock === 0);

// every(): ¿todos tienen precio mayor que cero?
const todosTienenPrecio = (productos) =>
  productos.every((producto) => producto.precio > 0);

// reduce(): suma de precio × stock
const calcularValorInventario = (productos) =>
  productos.reduce((total, { precio, stock }) => total + precio * stock, 0);

// sort(): de menor a mayor precio (copia para no modificar el original)
const ordenarPorPrecio = (productos) =>
  [...productos].sort((a, b) => a.precio - b.precio);

// ----- Pruebas -----
console.log("Disponibles:", obtenerDisponibles(productos));
console.log("Con IVA:", aplicarIVA(productos));
console.log("Buscar id 3:", buscarProducto(productos, 3));
console.log("Buscar id 99:", buscarProducto(productos, 99));
console.log("¿Hay agotados?", hayAgotados(productos));
console.log("¿Todos tienen precio?", todosTienenPrecio(productos));
console.log("Valor del inventario:", calcularValorInventario(productos));
console.log("Ordenados por precio:", ordenarPorPrecio(productos));
