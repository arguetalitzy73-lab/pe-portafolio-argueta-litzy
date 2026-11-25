function buscarCursos(textoBusqueda: string, maxResultados: number = 5): void {
  console.log(`Buscando cursos con "${textoBusqueda}" (máximo ${maxResultados} resultados).`);
}

buscarCursos("TypeScript");
buscarCursos("Bases de Datos", 10);