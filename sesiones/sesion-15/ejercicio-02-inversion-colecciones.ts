function invertirColeccion<T>(coleccion: readonly T[]): T[] {
  const invertida: T[] = [];
  for (let i = coleccion.length - 1; i >= 0; i--) {
    invertida.push(coleccion[i]);
  }
  return invertida;
}

const codigosDespacho: string[] = ["DSP-001", "DSP-002", "DSP-003"];
const montosFactura: number[] = [24.5, 89.0, 142.75, 55.25];

const codigosInvertidos: string[] = invertirColeccion(codigosDespacho);
const montosInvertidos: number[] = invertirColeccion(montosFactura);

console.log("Códigos originales (sin mutar):", codigosDespacho);
console.log("Códigos para auditoría (inverso):", codigosInvertidos);

console.log("Montos originales (sin mutar):", montosFactura);
console.log("Montos para auditoría (inverso):", montosInvertidos);