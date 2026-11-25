function calcularPrecioConDescuento(precio: number, porcentajeDescuento: number = 10): number {
  const montoDescuento = precio * (porcentajeDescuento / 100);
  return precio - montoDescuento;
}

const compraNormal = calcularPrecioConDescuento(40.0);
const compraPromocion = calcularPrecioConDescuento(40.0, 25);

console.log(`Precio con descuento predeterminado (10%): $${compraNormal.toFixed(2)}`);
console.log(`Precio con descuento promocional (25%): $${compraPromocion.toFixed(2)}`);