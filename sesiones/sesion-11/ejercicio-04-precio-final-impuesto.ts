function calcularPrecioFinal(precioBase: number, porcentajeImpuesto?: number): string {
  const impuesto = porcentajeImpuesto !== undefined ? precioBase * (porcentajeImpuesto / 100) : 0;
  const precioFinal = precioBase + impuesto;
  return precioFinal.toFixed(2);
}

console.log(`Precio sin impuesto adicional: $${calcularPrecioFinal(25.5)}`);
console.log(`Precio con impuesto del 13%: $${calcularPrecioFinal(25.5, 13)}`);