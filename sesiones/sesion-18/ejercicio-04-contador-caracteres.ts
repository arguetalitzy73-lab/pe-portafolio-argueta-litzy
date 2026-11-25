function contarCaracteresRecursivo(texto: string): number {
  // Caso base: cadena vacía
  if (texto === "") {
    return 0;
  }

  // En cada llamada se envía `texto.slice(1)`, es decir, la subcadena sin el primer carácter.
  // El proceso termina porque en cada paso se elimina un carácter y la longitud disminuye en 1
  // hasta alcanzar la cadena vacía ("") donde se detiene la recursión.
  return 1 + contarCaracteresRecursivo(texto.slice(1));
}

const codigoBiblioteca: string = "UNIVO2026";
const totalCaracteres: number = contarCaracteresRecursivo(codigoBiblioteca);

console.log(`Código: "${codigoBiblioteca}" -> Total de caracteres: ${totalCaracteres}`);