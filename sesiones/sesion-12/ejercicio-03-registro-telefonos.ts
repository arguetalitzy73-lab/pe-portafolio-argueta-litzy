function registrarTelefonos(nombreEstudiante: string, ...telefonos: string[]): void {
  console.log(`\nEstudiante: ${nombreEstudiante}`);
  if (telefonos.length === 0) {
    console.log("  No se registraron números telefónicos.");
    return;
  }

  telefonos.forEach((telefono, indice) => {
    console.log(`  ${indice + 1}. ${telefono}`);
  });
}

registrarTelefonos("Litzy Argueta", "7890-1234");
registrarTelefonos("Jennifer Guevara", "7123-4567", "2661-0099");
registrarTelefonos("Herberth Argueta", "7555-1122", "7555-3344", "2660-8877");