function mostrarEncabezadoSistema(): void {
  console.log("========================================");
  console.log("   SISTEMA DE REGISTRO DE VENTAS");
  console.log("========================================");
}

function validarPrecio(precioIngresado: number): number | null {
  if (Number.isNaN(precioIngresado) || precioIngresado <= 0) {
    return null;
  }
  return precioIngresado;
}

const clasificarCliente = (montoBase: number): string => {
  if (montoBase >= 100) {
    return "VIP";
  }
  if (montoBase >= 50) {
    return "Frecuente";
  }
  return "Regular";
};

function calcularTotalVenta(precioUnitario: number, cantidad: number, tipoCliente: string): number {
  const subtotal: number = precioUnitario * cantidad;
  let descuento: number = 0;

  if (tipoCliente === "VIP") {
    descuento = 0.15;
  } else if (tipoCliente === "Frecuente") {
    descuento = 0.05;
  }

  return subtotal * (1 - descuento);
}

function mostrarResumenVenta(
  tipoCliente: string,
  precioUnitario: number,
  cantidad: number,
  totalFinal: number
): void {
  console.log("\n--- RESUMEN DE LA VENTA ---");
  console.log(`Tipo de cliente: ${tipoCliente}`);
  console.log(`Precio unitario: $${precioUnitario.toFixed(2)}`);
  console.log(`Cantidad: ${cantidad}`);
  console.log(`Total a pagar: $${totalFinal.toFixed(2)}`);
  console.log("---------------------------\n");
}

function procesarVenta(precioEntrada: number, cantidad: number): void {
  mostrarEncabezadoSistema();

  const precioValido: number | null = validarPrecio(precioEntrada);
  if (precioValido === null || cantidad <= 0) {
    console.log("Error: Ingrese un precio y una cantidad válidos mayores a cero.");
    return;
  }

  const montoReferencia: number = precioValido * cantidad;
  const tipoCliente: string = clasificarCliente(montoReferencia);
  const totalFinal: number = calcularTotalVenta(precioValido, cantidad, tipoCliente);

  mostrarResumenVenta(tipoCliente, precioValido, cantidad, totalFinal);
}

// Ejemplo de ejecución
procesarVenta(35, 3);