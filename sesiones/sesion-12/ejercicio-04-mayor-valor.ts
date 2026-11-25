/**
 * Retorna el mayor valor entre las ventas recibidas.
 * Si no se envía ningún valor, retorna null en lugar de -Infinity para comunicar
 * claramente que no hubo operaciones registradas en la jornada.
 */
function obtenerMayorVenta(...ventas: number[]): number | null {
  if (ventas.length === 0) {
    return null;
  }

  let mayor = ventas[0];
  for (let i = 1; i < ventas.length; i++) {
    if (ventas[i] > mayor) {
      mayor = ventas[i];
    }
  }
  return mayor;
}

const mayorJornada1 = obtenerMayorVenta(120.5, 45.0, 310.75, 89.2);
const mayorJornada2 = obtenerMayorVenta();

console.log(
  mayorJornada1 !== null
    ? `Mayor venta registrada: $${mayorJornada1.toFixed(2)}`
    : "No se registraron ventas en la jornada."
);

console.log(
  mayorJornada2 !== null
    ? `Mayor venta registrada: $${mayorJornada2.toFixed(2)}`
    : "No se registraron ventas en la jornada."
);