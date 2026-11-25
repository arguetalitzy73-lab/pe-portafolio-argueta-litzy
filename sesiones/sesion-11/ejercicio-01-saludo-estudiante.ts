function saludarEstudiante(nombre: string, apellido?: string): string {
  const nombreMostrar = apellido ? `${nombre} ${apellido}` : nombre;
  return `¡Hola, ${nombreMostrar}! Bienvenido/a a la plataforma académica.`;
}

console.log(saludarEstudiante("Litzy", "Argueta"));
console.log(saludarEstudiante("Herberth"));