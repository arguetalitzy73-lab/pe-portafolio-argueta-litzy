/*
 * Seguimiento manual previo para N = 5:
 * ahorroAcumulado(5)
 *   -> 5 + ahorroAcumulado(4)
 *        -> 4 + ahorroAcumulado(3)
 *             -> 3 + ahorroAcumulado(2)
 *                  -> 2 + ahorroAcumulado(1)
 *                       -> 1 + ahorroAcumulado(0)
 *                            -> caso base (0 días): $0
 *                       <- 1 + 0 = 1
 *                  <- 2 + 1 = 3
 *             <- 3 + 3 = 6
 *        <- 4 + 6 = 10
 *   <- 5 + 10 = 15
 * Predicción: $15 ahorrados al finalizar 5 días.
 */

function calcularAhorroDias(dias: number): number {
  if (!Number.isInteger(dias) || dias < 0) {
    throw new Error("La cantidad de días no puede ser negativa ni decimal.");
  }

  // Caso base: 0 días equivalen a $0 ahorrados
  if (dias === 0) {
    return 0;
  }

  return dias + calcularAhorroDias(dias - 1);
}

try {
  const total5Dias: number = calcularAhorroDias(5);
  const total0Dias: number = calcularAhorroDias(0);

  console.log(`Ahorro acumulado en 5 días: $${total5Dias.toFixed(2)}`);
  console.log(`Ahorro acumulado en 0 días: $${total0Dias.toFixed(2)}`);
} catch (error) {
  console.error((error as Error).message);
}