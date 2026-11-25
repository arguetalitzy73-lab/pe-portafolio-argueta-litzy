function crearSaludoUNIVO(nombre: string): string {
  return `¡Hola, ${nombre}! Bienvenido/a a la Universidad de Oriente (UNIVO).`;
}

const saludo1: string = crearSaludoUNIVO("Litzy");
const saludo2: string = crearSaludoUNIVO("Herberth");

console.log(saludo1);
console.log(saludo2);