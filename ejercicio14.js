/*
  EJERCICIO 14 - Copia y modificación de arreglos
  Enunciado: copiar con spread, agregar "Audífonos", quitar el último con
  pop(), comprobar que el original no cambia y combinar con nuevosProductos.
*/

const productosOriginales = ["Laptop", "Mouse", "Monitor", "Teclado"];

// 1. Copia con spread
const copiaPromocion = [...productosOriginales];

// 2. Agregar "Audífonos"
copiaPromocion.push("Audífonos");

// 3. Eliminar el último de la copia
copiaPromocion.pop();

// 4. Mostrar ambos
console.log("Original:", productosOriginales);
console.log("Copia:", copiaPromocion);

// 5. Comprobar que el original mantiene 4 elementos
console.log(`El original tiene ${productosOriginales.length} elementos`); // 4
console.log(productosOriginales.length === 4 ? "Original intacto ✔" : "Original modificado ✘");

// 6. Combinar con otro arreglo
const nuevosProductos = ["Impresora", "Cámara web"];
const todosLosProductos = [...productosOriginales, ...nuevosProductos];
console.log("Combinado:", todosLosProductos);
// ["Laptop", "Mouse", "Monitor", "Teclado", "Impresora", "Cámara web"]

// Pruebas adicionales
const copia2 = [...productosOriginales];
copia2.push("Parlantes");
console.log("Copia 2:", copia2);
console.log("Original sigue igual:", productosOriginales);
console.log(copia2 === productosOriginales); // false (son arreglos distintos)
