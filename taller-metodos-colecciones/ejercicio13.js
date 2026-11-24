// Ejercicio 13. Validación de pedidos | some() + every()
const pedidos = [
  { id: 1, total: 150000, estado: "Entregado" },
  { id: 2, total: 250000, estado: "Pendiente" },
  { id: 3, total: 90000, estado: "Entregado" },
  { id: 4, total: 300000, estado: "Entregado" },
];

const hayPedidosPendientes = (pedidos) =>
  pedidos.some((pedido) => pedido.estado === "Pendiente");

const todosLosPedidosSonValidos = (pedidos) =>
  pedidos.every((pedido) => pedido.total > 0);

const todosEntregados = (pedidos) =>
  pedidos.every((pedido) => pedido.estado === "Entregado");

console.log("¿Hay pedidos pendientes?", hayPedidosPendientes(pedidos)); // true
console.log("¿Todos son válidos?", todosLosPedidosSonValidos(pedidos)); // true
console.log("¿Todos entregados?", todosEntregados(pedidos)); // false
