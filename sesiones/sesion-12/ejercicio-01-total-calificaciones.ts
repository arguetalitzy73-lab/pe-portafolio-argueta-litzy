function sumarCalificaciones(...calificaciones: number[]): number {
  let total = 0;
  for (const nota of calificaciones) {
    total += nota;
  }
  return total;
}

console.log("Prueba 1 (2 notas):", sumarCalificaciones(7.5, 8.0));
console.log("Prueba 2 (4 notas):", sumarCalificaciones(6.5, 9.0, 8.2, 7.8));
console.log("Prueba 3 (sin notas):", sumarCalificaciones());