// Mecanismo elegido para copiar/transformar sin mutar:
// El método `.map()` (combinado con propagación `[...arreglo]` cuando se requiera
// clonar un arreglo sin transformar). `.map()` es compatible con TypeScript,
// devuelve un nuevo arreglo tipado (`number[]`) con los precios aumentados en $0.25
// y deja intacto el arreglo original.

// Alternativa A: Modifica directamente el arreglo recibido (efecto secundario)
function aumentarPreciosEnSitio(precios: number[], aumento: number = 0.25): void {
  for (let i = 0; i < precios.length; i++) {
    precios[i] = Number((precios[i] + aumento).toFixed(2));
  }
}

// Alternativa B: Crea y retorna un nuevo arreglo sin alterar el original
function obtenerPreciosAumentados(precios: readonly number[], aumento: number = 0.25): number[] {
  return precios.map((precio) => Number((precio + aumento).toFixed(2)));
}

// Prueba de Alternativa A
const preciosTiendaA: number[] = [1.0, 2.5, 4.75];
console.log("Alternativa A - Original antes:", preciosTiendaA);
aumentarPreciosEnSitio(preciosTiendaA, 0.25);
console.log("Alternativa A - Original después (mutado):", preciosTiendaA);

// Prueba de Alternativa B
const preciosTiendaB: number[] = [1.0, 2.5, 4.75];
console.log("\nAlternativa B - Original antes:", preciosTiendaB);
const preciosActualizadosB: number[] = obtenerPreciosAumentados(preciosTiendaB, 0.25);
console.log("Alternativa B - Nuevo arreglo con aumento:", preciosActualizadosB);
console.log("Alternativa B - Original después (intacto):", preciosTiendaB);

// Análisis solicitados:
// 1. ¿Cuál produce un efecto secundario?
//    La Alternativa A (`aumentarPreciosEnSitio`), porque muta directamente el arreglo
//    recibido fuera del alcance de la función.
// 2. ¿Cuál conserva los datos originales?
//    La Alternativa B (`obtenerPreciosAumentados`), porque genera un nuevo arreglo
//    mediante `.map()` sin modificar el arreglo de entrada.
// 3. ¿En qué situación utilizaría cada alternativa?
//    - Alternativa A: cuando el objetivo explícito sea actualizar una estructura en memoria
//      y se tenga certeza de que ningún otro módulo depende de su estado anterior.
//    - Alternativa B: cuando se necesite conservar el historial o catálogo original,
//      evitar bugs por mutaciones inesperadas o trabajar con datos compartidos.