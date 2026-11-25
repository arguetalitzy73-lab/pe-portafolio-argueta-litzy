interface ReporteColeccion {
  cantidadProcesada: number;
  confirmacion: string;
}

function reportarColeccion<T>(lote: T[]): ReporteColeccion {
  return {
    cantidadProcesada: lote.length,
    confirmacion: `Operación completada: se procesaron ${lote.length} elemento(s).`
  };
}

const codigosBarras: string[] = ["7410001001", "7410001002", "7410001003"];
const descripciones: string[] = ["Agua embotellada", "Pan dulce"];
const existencias: boolean[] = [true, true, false, true];

console.log(reportarColeccion(codigosBarras));
console.log(reportarColeccion(descripciones));
console.log(reportarColeccion(existencias));