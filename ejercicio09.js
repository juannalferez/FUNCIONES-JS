/*
  EJERCICIO 09 - Sistema de inventario básico
  Enunciado: contarAgotados, contarBajoStock (0 < cantidad < 5), total de
  unidades. Reto: cantidad más alta sin usar Math.max().
*/

const inventario = [15, 8, 0, 23, 4, 12, 0];

function contarAgotados(lista) {
  let contador = 0;
  for (const cantidad of lista) {
    if (cantidad === 0) {
      contador++;
    }
  }
  return contador;
}

function contarBajoStock(lista) {
  let contador = 0;
  for (const cantidad of lista) {
    if (cantidad > 0 && cantidad < 5) {
      contador++;
    }
  }
  return contador;
}

function totalUnidades(lista) {
  let total = 0;
  for (const cantidad of lista) {
    total += cantidad;
  }
  return total;
}

// Reto
function cantidadMasAlta(lista) {
  let mayor = lista[0];
  for (const cantidad of lista) {
    if (cantidad > mayor) {
      mayor = cantidad;
    }
  }
  return mayor;
}

// Pruebas
console.log(`Agotados: ${contarAgotados(inventario)}`);       // 2
console.log(`Bajo stock: ${contarBajoStock(inventario)}`);    // 1
console.log(`Total de unidades: ${totalUnidades(inventario)}`); // 62
console.log(`Cantidad más alta: ${cantidadMasAlta(inventario)}`); // 23

const otroInventario = [0, 0, 3, 2, 50];
console.log(contarAgotados(otroInventario));   // 2
console.log(contarBajoStock(otroInventario));  // 2
console.log(totalUnidades(otroInventario));    // 55
console.log(cantidadMasAlta(otroInventario));  // 50
