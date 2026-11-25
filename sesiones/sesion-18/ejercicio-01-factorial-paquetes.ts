/*
 * Seguimiento manual previo para factorial(4):
 * factorial(4)
 *   -> 4 * factorial(3)
 *        -> 3 * factorial(2)
 *             -> 2 * factorial(1)
 *                  -> 1 * factorial(0)
 *                       -> caso base: 1
 *                  <- 1 * 1 = 1
 *             <- 2 * 1 = 2
 *        <- 3 * 2 = 6
 *   <- 4 * 6 = 24
 * Resultado esperado: 24 formas distintas.
 */

function factorialPaquetes(cantidad: number): number {
  if (!Number.isInteger(cantidad) || cantidad < 0) {
    throw new Error("La cantidad de paquetes debe ser un número entero mayor o igual a 0.");
  }

  // Caso base
  if (cantidad === 0 || cantidad === 1) {
    return 1;
  }

  // Paso recursivo reduciendo el problema en 1
  return cantidad * factorialPaquetes(cantidad - 1);
}

try {
  const combinaciones4: number = factorialPaquetes(4);
  console.log(`Formas de organizar 4 paquetes: ${combinaciones4}`);
  console.log(`Formas de organizar 0 paquetes: ${factorialPaquetes(0)}`);
} catch (error) {
  console.error((error as Error).message);
}