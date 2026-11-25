/**
 * Calcula el promedio de una cantidad variable de notas.
 * Si no se recibe ninguna nota, retorna null para evitar división entre cero
 * y distinguir un promedio inexistente de un promedio real de 0.
 */
function calcularPromedioNotas(...notas: number[]): number | null {
  if (notas.length === 0) {
    return null;
  }

  let suma = 0;
  for (const nota of notas) {
    suma += nota;
  }
  return suma / notas.length;
}

const prom1 = calcularPromedioNotas(8.5, 9.0, 7.5);
const prom2 = calcularPromedioNotas(6.0, 8.0);
const promVacio = calcularPromedioNotas();

console.log("Promedio 1:", prom1 !== null ? prom1.toFixed(2) : "Sin notas registradas");
console.log("Promedio 2:", prom2 !== null ? prom2.toFixed(2) : "Sin notas registradas");
console.log("Promedio vacío:", promVacio !== null ? promVacio.toFixed(2) : "Sin notas registradas");