// Predicción / hipótesis antes de ejecutar:
// El arreglo `presentes` tendrá 4 elementos después de ejecutar la función,
// porque los arreglos son objetos y se pasan por referencia: la función recibe
// una referencia a la misma estructura en memoria y `push` agrega un elemento ahí mismo.

function agregarEstudiantePresente(listaAsistencia: string[], nuevoEstudiante: string): void {
  listaAsistencia.push(nuevoEstudiante);
}

const presentes: string[] = ["Ana", "Carlos", "Mario"];
console.log("Antes de agregar (cantidad):", presentes.length, presentes);

agregarEstudiantePresente(presentes, "Lucía");
console.log("Después de agregar (cantidad):", presentes.length, presentes);

// Comparación con el Ejercicio 1:
// El comportamiento es DIFERENTE al del Ejercicio 1.
// En el Ejercicio 1 (primitivo `number`), la variable original mantuvo su valor
// porque se trabajó sobre una copia. Aquí, al pasar un arreglo, ambos nombres
// (`presentes` y `listaAsistencia`) apuntan al mismo arreglo en memoria, por lo
// que modificarlo con `.push()` sí se refleja en `presentes`.
