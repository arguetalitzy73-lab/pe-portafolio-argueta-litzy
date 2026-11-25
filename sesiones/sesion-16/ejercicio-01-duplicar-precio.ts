// Predicción antes de ejecutar:
// `precioOriginal` seguirá valiendo 15.50 después de llamar a `duplicarPrecio`,
// porque los tipos primitivos (`number`) en TypeScript/JavaScript se pasan por valor:
// la función recibe una copia del número, no la variable original.

function duplicarPrecio(precio: number): number {
  precio = precio * 2;
  return precio;
}

const precioOriginal: number = 15.5;
console.log("Precio antes de llamar a duplicarPrecio:", precioOriginal);

const precioDuplicadoRetornado: number = duplicarPrecio(precioOriginal);
console.log("Valor retornado por duplicarPrecio:", precioDuplicadoRetornado);
console.log("Precio después de llamar a duplicarPrecio:", precioOriginal);

// Explicación con mis propias palabras:
// `precioOriginal` no cambió porque `number` es un dato primitivo y se pasa por valor.
// Al invocar `duplicarPrecio(precioOriginal)`, se crea una copia local llamada `precio`
// dentro de la función; multiplicar `precio` por 2 solo altera esa copia local y no
// modifica la variable `precioOriginal` fuera de la función.