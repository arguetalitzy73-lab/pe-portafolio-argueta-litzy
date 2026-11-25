/*
 * Árbol de llamadas para obtener el término en la posición 4 (0-indexed: 0, 1, 1, 2, 3):
 *
 *                    fibonacci(4)
 *                   /            \
 *         fibonacci(3)          fibonacci(2)
 *          /        \             /        \
 *  fibonacci(2)  fibonacci(1)  fibonacci(1) fibonacci(0)
 *   /       \         |           |           |
 * fib(1)  fib(0)      1           1           0
 *   |        |
 *   1        0
 *
 * Evaluaciones:
 * - fib(2) = 1 + 0 = 1
 * - fib(3) = 1 + 1 = 2
 * - fib(2) derecho = 1 + 0 = 1
 * - fib(4) = 2 + 1 = 3
 */

function fibonacci(posicion: number): number {
  if (!Number.isInteger(posicion) || posicion < 0) {
    throw new Error("La posición debe ser un número entero mayor o igual a 0.");
  }

  // Casos base para las primeras posiciones
  if (posicion === 0) {
    return 0;
  }
  if (posicion === 1) {
    return 1;
  }

  return fibonacci(posicion - 1) + fibonacci(posicion - 2);
}

function mostrarPrimerosTerminos(cantidadTerminos: number): void {
  if (!Number.isInteger(cantidadTerminos) || cantidadTerminos < 0) {
    throw new Error("La cantidad de términos debe ser un entero no negativo.");
  }

  const secuencia: number[] = [];
  for (let i = 0; i < cantidadTerminos; i++) {
    secuencia.push(fibonacci(i));
  }

  console.log(`Primeros ${cantidadTerminos} términos de Fibonacci: ${secuencia.join(", ")}`);
  console.log(`Término en la posición 4: ${fibonacci(4)}`);
}

try {
  mostrarPrimerosTerminos(6);
} catch (error) {
  console.error((error as Error).message);
}