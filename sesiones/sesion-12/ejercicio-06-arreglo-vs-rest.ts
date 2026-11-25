// 1. Función que recibe un arreglo como único argumento
function sumarConArreglo(numeros: number[]): number {
  let suma = 0;
  for (const n of numeros) {
    suma += n;
  }
  return suma;
}

// 2. Función que recibe los números mediante parámetro rest (...numeros: number[])
function sumarConRest(...numeros: number[]): number {
  let suma = 0;
  for (const n of numeros) {
    suma += n;
  }
  return suma;
}

// Invocación con los mismos valores:
// sumarConArreglo requiere corchetes [...] porque espera un único parámetro de tipo number[].
const totalArreglo = sumarConArreglo([15, 25, 35, 25]);

// sumarConRest recibe argumentos separados por comas porque TypeScript/JavaScript
// agrupa automáticamente todos los argumentos individuales dentro de un arreglo `numeros`.
const totalRest = sumarConRest(15, 25, 35, 25);

console.log("Resultado con arreglo:", totalArreglo);
console.log("Resultado con rest:", totalRest);

// Uso del operador de propagación (spread operator `...`) en la llamada:
// Si ya tienes un arreglo existente, `...` "desempaqueta" sus elementos como
// argumentos individuales para pasarlos a una función con parámetro rest.
const ventasGuardadas: number[] = [50, 75, 125];
const totalDesdeArregloConSpread = sumarConRest(...ventasGuardadas);

console.log("Resultado usando spread con función rest:", totalDesdeArregloConSpread);