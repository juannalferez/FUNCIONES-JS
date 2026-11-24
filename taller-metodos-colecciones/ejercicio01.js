// Ejercicio 1. Aplicar descuentos a productos | map()
const precios = [50000, 120000, 80000, 200000, 35000];

const aplicarDescuento = (precios) => precios.map((precio) => precio * 0.9);

const preciosFinales = aplicarDescuento(precios);
console.log("Precios originales:", precios);
console.log("Precios finales:", preciosFinales);
// Esperado: [45000, 108000, 72000, 180000, 31500]
