function conservaDatoAny(dato: any): any {
  return dato;
}

function conservaDatoGenerico<T>(dato: T): T {
  return dato;
}

// Llamadas con string, number y boolean
const textoAny = conservaDatoAny("UNIVO");
const numeroAny = conservaDatoAny(100);
const booleanoAny = conservaDatoAny(true);

const textoGen = conservaDatoGenerico("UNIVO");
const numeroGen = conservaDatoGenerico(100);
const booleanoGen = conservaDatoGenerico(true);

// Operaciones que NO corresponden al tipo recibido:
// Con `any`, TypeScript NO marca error al compilar (puede fallar en ejecución):
// textoAny.toFixed(2);       // `textoAny` es string, pero `any` permite llamar `.toFixed()`
// numeroAny.toUpperCase();   // `numeroAny` es number, pero `any` permite llamar `.toUpperCase()`

// Con `<T>`, TypeScript SÍ detecta el error en tiempo de compilación:
// textoGen.toFixed(2);       // Error TS: Property 'toFixed' does not exist on type 'string'.
// numeroGen.toUpperCase();   // Error TS: Property 'toUpperCase' does not exist on type 'number'.
// booleanoGen.length;        // Error TS: Property 'length' does not exist on type 'boolean'.

console.log("Valores devueltos con any:", textoAny, numeroAny, booleanoAny);
console.log("Valores devueltos con <T>:", textoGen, numeroGen, booleanoGen);