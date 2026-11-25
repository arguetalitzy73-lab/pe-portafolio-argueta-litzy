function obtenerPrimerElemento<T>(elementos: T[]): T | undefined {
  return elementos[0];
}

const colaNombres: string[] = ["Sofía Martínez", "Diego Alvarado", "Elena Rivas"];
const colaTickets: number[] = [101, 102, 103, 104];

const primerNombre: string | undefined = obtenerPrimerElemento(colaNombres);
const primerTicket: number | undefined = obtenerPrimerElemento(colaTickets);

console.log("Primer usuario en espera:", primerNombre);
console.log("Primer ticket asignado:", primerTicket);