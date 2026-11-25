const esNumeroPar = (numero: number): boolean => {
  return numero % 2 === 0;
};

const numerosPrueba: number[] = [2, 7, 14, 21];

for (const num of numerosPrueba) {
  if (esNumeroPar(num)) {
    console.log(`El número ${num} es par (Equipo par).`);
  } else {
    console.log(`El número ${num} es impar (Equipo impar).`);
  }
}