function registrarEstudiante(
  nombre: string,
  carrera: string = "Ingeniería en Desarrollo de Software"
): string {
  return `Estudiante registrado: ${nombre} | Carrera: ${carrera}`;
}

console.log(registrarEstudiante("Litzy Argueta"));
console.log(registrarEstudiante("Jennifer Guevara", "Ingeniería Industrial"));